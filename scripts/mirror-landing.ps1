param(
    [string]$SourceUrl = 'https://lp.pulsetelecom.net.br/pulse-telecom/?utm_source=google&utm_campaign=leads&utm_term=institucional&utm_content=search',
    [string]$SnapshotPath = '.\source-original.html',
    [string]$OutputPath = '.\index.html',
    [string]$AssetsRoot = 'assets/cdn'
)

Set-StrictMode -Version Latest
$ErrorActionPreference = 'Stop'
$Utf8Encoding = [System.Text.Encoding]::UTF8
$Utf8NoBom = New-Object System.Text.UTF8Encoding($false)

function Ensure-Directory {
    param([string]$Path)

    if (-not (Test-Path -LiteralPath $Path)) {
        New-Item -ItemType Directory -Path $Path | Out-Null
    }
}

function Read-TextUtf8 {
    param([string]$Path)

    return [System.IO.File]::ReadAllText((Resolve-Path -LiteralPath $Path), $Utf8Encoding)
}

function Write-TextUtf8 {
    param(
        [string]$Path,
        [string]$Content
    )

    [System.IO.File]::WriteAllText((Join-Path $projectRoot $Path), $Content, $Utf8NoBom)
}

function Get-AssetRelativePath {
    param([string]$Url, [string]$Root)

    $uri = [Uri]$Url
    $trimmedPath = $uri.AbsolutePath.TrimStart('/')

    if ([string]::IsNullOrWhiteSpace($trimmedPath)) {
        return ($Root.TrimEnd('/', '\') + '/')
    }

    return ($Root.TrimEnd('/', '\') + '/' + $trimmedPath)
}

function Split-UrlReference {
    param([string]$Url)

    $match = [regex]::Match($Url, '^(?<base>[^?#]+)(?<suffix>[?#].*)?$')

    if (-not $match.Success) {
        throw "Nao foi possivel separar a URL: $Url"
    }

    return [PSCustomObject]@{
        BaseUrl = $match.Groups['base'].Value
        Suffix  = $match.Groups['suffix'].Value
    }
}

function Get-RelativePathForUrl {
    param([string]$Url, [string]$LandingAssetsRoot)

    $parts = Split-UrlReference -Url $Url
    $uri = [Uri]$parts.BaseUrl

    if ($uri.Host -eq 'cdn.landingpage.app.br') {
        $root = $LandingAssetsRoot
    } else {
        $root = 'assets/external/' + $uri.Host
    }

    $trimmedPath = $uri.AbsolutePath.TrimStart('/')

    if ([string]::IsNullOrWhiteSpace($trimmedPath)) {
        $trimmedPath = 'index'
    }

    return [PSCustomObject]@{
        BaseUrl      = $parts.BaseUrl
        Suffix       = $parts.Suffix
        RelativePath = ($root.TrimEnd('/', '\') + '/' + $trimmedPath)
    }
}

function Get-AssetDiskPath {
    param([string]$RelativePath, [string]$ProjectRoot)

    $normalizedRelativePath = $RelativePath -replace '/', '\'
    return [IO.Path]::Combine($ProjectRoot, $normalizedRelativePath)
}

function Mirror-ReferencedAssets {
    param(
        [string[]]$Urls,
        [string]$ProjectRoot,
        [string]$LandingAssetsRoot,
        [System.Collections.Generic.List[string]]$FailedDownloads
    )

    $replacementMap = @{}
    $downloadedBaseUrls = [System.Collections.Generic.HashSet[string]]::new()
    $successfulBaseUrls = [System.Collections.Generic.HashSet[string]]::new()
    $orderedUrls = $Urls | Sort-Object -Unique
    $total = $orderedUrls.Count
    $current = 0

    foreach ($url in $orderedUrls) {
        $current++
        $assetInfo = Get-RelativePathForUrl -Url $url -LandingAssetsRoot $LandingAssetsRoot
        $diskPath = Get-AssetDiskPath -RelativePath $assetInfo.RelativePath -ProjectRoot $ProjectRoot
        $parentDirectory = Split-Path -Path $diskPath -Parent

        Ensure-Directory -Path $parentDirectory

        if ($downloadedBaseUrls.Add($assetInfo.BaseUrl)) {
            Write-Host ("[{0}/{1}] {2}" -f $current, $total, $assetInfo.RelativePath)

            try {
                Invoke-WebRequest -Uri $assetInfo.BaseUrl -OutFile $diskPath -UseBasicParsing
                $successfulBaseUrls.Add($assetInfo.BaseUrl) | Out-Null
            } catch {
                $FailedDownloads.Add($assetInfo.BaseUrl) | Out-Null
                Write-Warning ("Falha ao baixar: {0}" -f $assetInfo.BaseUrl)
                continue
            }
        }

        if ($successfulBaseUrls.Contains($assetInfo.BaseUrl) -or (Test-Path -LiteralPath $diskPath)) {
            $replacementMap[$url] = './' + ($assetInfo.RelativePath -replace '\\', '/') + $assetInfo.Suffix
        }
    }

    return $replacementMap
}

$projectRoot = (Get-Location).Path
Ensure-Directory -Path (Join-Path $projectRoot 'scripts')
Ensure-Directory -Path (Join-Path $projectRoot ($AssetsRoot -replace '/', '\'))

if (Test-Path -LiteralPath $SnapshotPath) {
    $html = Read-TextUtf8 -Path $SnapshotPath
} else {
    Write-Host "Baixando HTML original..."
    Invoke-WebRequest -Uri $SourceUrl -OutFile $SnapshotPath -UseBasicParsing
    $html = Read-TextUtf8 -Path $SnapshotPath
}

$cdnRoot = 'https://cdn.landingpage.app.br/'
$assetPattern = 'https://cdn\.landingpage\.app\.br[^"'' )]+'
$assetUrls = [regex]::Matches($html, $assetPattern) |
    ForEach-Object { $_.Value } |
    Sort-Object -Unique

$downloadUrls = $assetUrls | Where-Object { $_ -ne $cdnRoot }
$assetMap = @{}
$assetMap[$cdnRoot] = './' + ($AssetsRoot.TrimEnd('/', '\')) + '/'

$failedDownloads = [System.Collections.Generic.List[string]]::new()

try {
    $mirroredLandingAssets = Mirror-ReferencedAssets -Urls $downloadUrls -ProjectRoot $projectRoot -LandingAssetsRoot $AssetsRoot -FailedDownloads $failedDownloads
    foreach ($key in $mirroredLandingAssets.Keys) {
        $assetMap[$key] = $mirroredLandingAssets[$key]
    }
} catch {
    $failedDownloads.Add($_.Exception.Message) | Out-Null
}

$cssFiles = Get-ChildItem -Path (Join-Path $projectRoot ($AssetsRoot -replace '/', '\')) -Recurse -Filter *.css -File
$externalUrlPattern = 'https?://[^"'' )]+'
$externalUrls = $cssFiles |
    ForEach-Object {
        $cssContent = [System.IO.File]::ReadAllText($_.FullName, $Utf8Encoding)
        [regex]::Matches($cssContent, $externalUrlPattern) | ForEach-Object { $_.Value }
    } |
    Sort-Object -Unique

if ($externalUrls.Count -gt 0) {
    try {
        $mirroredExternalAssets = Mirror-ReferencedAssets -Urls $externalUrls -ProjectRoot $projectRoot -LandingAssetsRoot $AssetsRoot -FailedDownloads $failedDownloads
        $cssFallbackReplacements = @{
            'url(https://cdn.greatapps.com.br/_greatpages/fontes/v6/1/fa-regular-400.woff) format("woff")' = 'url(./assets/external/cdn.greatapps.com.br/_greatpages/fontes/v6/1/fa-regular-400.woff2) format("woff2")'
            'url(https://cdn.greatapps.com.br/_greatpages/fontes/v6/1/fa-regular-400.svg#FontAwesome6Pro) format("svg")' = 'url(./assets/external/cdn.greatapps.com.br/_greatpages/fontes/v6/1/fa-regular-400.ttf) format("truetype")'
        }

        foreach ($cssFile in $cssFiles) {
            $cssContent = [System.IO.File]::ReadAllText($cssFile.FullName, $Utf8Encoding)

            foreach ($key in ($mirroredExternalAssets.Keys | Sort-Object Length -Descending)) {
                $cssContent = $cssContent.Replace($key, $mirroredExternalAssets[$key])
            }

            foreach ($key in $cssFallbackReplacements.Keys) {
                $cssContent = $cssContent.Replace($key, $cssFallbackReplacements[$key])
            }

            [System.IO.File]::WriteAllText($cssFile.FullName, $cssContent, $Utf8NoBom)
        }
    } catch {
        $failedDownloads.Add($_.Exception.Message) | Out-Null
    }
}

$rewrittenHtml = $html
$sortedKeys = $assetMap.Keys | Sort-Object Length -Descending

foreach ($key in $sortedKeys) {
    $rewrittenHtml = $rewrittenHtml.Replace($key, $assetMap[$key])
}

Write-TextUtf8 -Path $OutputPath -Content $rewrittenHtml

Write-Host ''
Write-Host ("HTML gerado em: {0}" -f (Resolve-Path -LiteralPath $OutputPath))
Write-Host ("Assets baixados em: {0}" -f (Resolve-Path -LiteralPath ($AssetsRoot -replace '/', '\')))

if ($failedDownloads.Count -gt 0) {
    Write-Warning ("Downloads com falha: {0}" -f $failedDownloads.Count)
    $failedDownloads | ForEach-Object { Write-Warning $_ }
}

Write-Host ("Assets espelhados com sucesso: {0}" -f $downloadUrls.Count)
