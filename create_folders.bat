@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ====== ÁLLÍTHATÓ: VAULT HELYE ======
set "VAULT=E:\AUNI"

echo [i] Célvault: "%VAULT%"
if not exist "%VAULT%" mkdir "%VAULT%"

REM ====== ALAP MAPPÁK ======
for %%D in (
  "00_Inbox"
  "10_Szemeszterek\2025-2026_1_osz\Kurzusok"
  "20_Kurzusok"
  "30_Jegyzetek\Eloadasok"
  "30_Jegyzetek\Gyakorlatok"
  "40_Feladatok"
  "50_Projektek"
  "60_Vizsgak"
  "70_Olvasmanyok"
  "80_Referencia\Fogalmak"
  "80_Referencia\Kepletek"
  "99_Archiv"
  "_Templates"
  "_Assets\Attachments"
  ".obsidian\snippets"
) do if not exist "%VAULT%\%%~D" mkdir "%VAULT%\%%~D"

REM ====== KURZUS LISTA ======
set courses[1].code=PSZK-KOZG1
set courses[1].name=Közgazdaságtan 1

set courses[2].code=PSZK-NJI
set courses[2].name=Nemzetközi és jogi ismeretek

set courses[3].code=PSZK-SZA
set courses[3].name=Számvitel alapjai

set courses[4].code=PSZK-SZME
set courses[4].name=Szervezetmenedzsment

set courses[5].code=PSZK-TESI1-A
set courses[5].name=Testnevelés 1 (A)

set courses[6].code=PSZK-TESI1-B
set courses[6].name=Testnevelés 1 (B)

set courses[7].code=PSZK-ANGOL1
set courses[7].name=Üzleti és társadalomtudományi idegen nyelv (angol)

set courses[8].code=PSZK-UZINFO
set courses[8].name=Üzleti informatika

set courses[9].code=PSZK-UZKOM
set courses[9].name=Üzleti kommunikáció

set courses[10].code=PSZK-UZMAT
set courses[10].name=Üzleti matematika

set count=10

REM ====== VÉGIGMEGYÜNK A KURZUSOKON ======
for /L %%I in (1,1,%count%) do (
  call set "CODE=%%courses[%%I].code%%"
  call set "NAME=%%courses[%%I].name%%"

  REM Kurzus fájl
  set "COURSE_MD=%VAULT%\20_Kurzusok\!CODE! - !NAME!.md"
  if not exist "!COURSE_MD!" (
    > "!COURSE_MD!" (
      echo ---
      echo type: kurzus
      echo course_code: !CODE!
      echo course_name: !NAME!
      echo semester: 2025/26-1
      echo status: aktiv
      echo tags: [kurzus, psz]
      echo ---
      echo.
      echo # !CODE! - !NAME!
    )
    echo [ok] Kurzusfajl: !COURSE_MD!
  )

  REM Kurzus almappák
  for %%P in (
    "30_Jegyzetek\Eloadasok\!CODE! - !NAME!"
    "30_Jegyzetek\Gyakorlatok\!CODE! - !NAME!"
    "40_Feladatok\!CODE! - !NAME!"
    "50_Projektek\!CODE! - !NAME!"
    "60_Vizsgak\!CODE! - !NAME!"
    "70_Olvasmanyok\!CODE! - !NAME!"
    "80_Referencia\Fogalmak\!CODE! - !NAME!"
    "80_Referencia\Kepletek\!CODE! - !NAME!"
  ) do (
    if not exist "%VAULT%\%%~P" (
      mkdir "%VAULT%\%%~P"
      echo [ok] Mappa: "%VAULT%\%%~P"
    )
  )
)

echo.
echo [KESZ] Minden mappa és kurzusfájl létrehozva (német nyelv kihagyva).
endlocal
pause
