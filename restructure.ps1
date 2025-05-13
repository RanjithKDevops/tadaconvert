# Tadaconvert Directory Restructuring Script
# Run this from your root directory (C:\Users\DELL\Desktop\Tadaconvert)

# 1. Create the new folder structure
$foldersToCreate = @(
    "health",
    "converters/temperature",
    "converters/length",
    "converters/weight",
    "partials"  # For shared HTML components
)

foreach ($folder in $foldersToCreate) {
    $fullPath = Join-Path -Path $PWD -ChildPath $folder
    if (-not (Test-Path $fullPath)) {
        New-Item -ItemType Directory -Path $fullPath -Force | Out-Null
        Write-Host "Created folder: $folder"
    }
}

# 2. Move files to their new locations
$fileMappings = @{
    "bmi-calculator.html" = "health"
    "calorie-calculator.html" = "health"
    "pregnancy-calculator.html" = "health"
    "age-calculator.html" = "health"
    "celsius-to-fahrenheit.html" = "converters/temperature"
    "cm-to-inches.html" = "converters/length"
    "kg-to-pounds.html" = "converters/weight"
}

foreach ($file in $fileMappings.Keys) {
    $source = Join-Path -Path $PWD -ChildPath $file
    $destination = Join-Path -Path $PWD -ChildPath $fileMappings[$file]
    
    if (Test-Path $source) {
        Move-Item -Path $source -Destination $destination -Force
        Write-Host "Moved $file to $($fileMappings[$file])"
    } else {
        Write-Host "File not found: $file" -ForegroundColor Yellow
    }
}

# 3. Update index.html paths (optional - recommended to do manually)
Write-Host "`nRemember to update paths in index.html:" -ForegroundColor Cyan
Write-Host "- Change 'bmi-calculator.html' to 'health/bmi-calculator.html'"
Write-Host "- Change 'celsius-to-fahrenheit.html' to 'converters/temperature/celsius-to-fahrenheit.html'"
Write-Host "- Update all other links similarly"

# 4. Verify structure
Write-Host "`nFinal structure:" -ForegroundColor Green
Get-ChildItem -Recurse -Directory | Select-Object FullName | Format-Table -HideTableHeaders