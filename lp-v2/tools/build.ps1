$ErrorActionPreference = 'Stop'
$siteRoot = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
& npx --yes esbuild (Join-Path $siteRoot 'styles.css') --minify "--outfile=$(Join-Path $siteRoot 'styles.min.css')"
if ($LASTEXITCODE -ne 0) { throw 'Falha ao otimizar CSS' }
& npx --yes esbuild (Join-Path $siteRoot 'script.js') --minify --target=es2020 "--outfile=$(Join-Path $siteRoot 'script.min.js')"
if ($LASTEXITCODE -ne 0) { throw 'Falha ao otimizar JavaScript' }
