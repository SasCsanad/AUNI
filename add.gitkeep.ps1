# Rekurzívan végigmegy az aktuális könyvtár összes almappáján
# Ha a mappa üres, létrehoz benne egy .gitkeep fájlt

$rootPath = Get-Location

Get-ChildItem -Path $rootPath -Recurse -Directory | ForEach-Object {
    # Megnézzük, hogy van-e benne bármilyen fájl vagy mappa
    $items = Get-ChildItem -Path $_.FullName -Force

    if ($items.Count -eq 0) {
        # Ha üres, létrehozunk egy .gitkeep fájlt
        $gitkeepPath = Join-Path $_.FullName ".gitkeep"
        New-Item -ItemType File -Path $gitkeepPath -Force | Out-Null
        Write-Host "Hozzáadva: $gitkeepPath" -ForegroundColor Green
    }
}
