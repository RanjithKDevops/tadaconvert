# Create folders
$folders = @(
  "calculators",
  "policies",
  "css",
  "js",
  "images\calculator-icons"
)

foreach ($folder in $folders) {
  New-Item -ItemType Directory -Path $folder -Force | Out-Null
}

# Create root files
@"
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>Tadaconvert - Free Online Calculators and Converters</title>
  <link rel='stylesheet' href='css/style.css'>
</head>
<body>
  <h1>Welcome to Tadaconvert!</h1>
  <script src='js/main.js'></script>
</body>
</html>
"@ | Set-Content index.html

"Simple README for Tadaconvert project" | Set-Content README.md

# Calculator HTML files
$calculatorFiles = @(
  "bmi", "calorie", "body-fat", "bmr", "ideal-weight", "pace", "age-zodiac"
)

foreach ($file in $calculatorFiles) {
  @"
<!DOCTYPE html>
<html lang='en'>
<head>
  <meta charset='UTF-8'>
  <meta name='viewport' content='width=device-width, initial-scale=1.0'>
  <title>$file Calculator</title>
  <link rel='stylesheet' href='../css/calculator.css'>
</head>
<body>
  <h1>$file Calculator</h1>
  <script src='../js/$file.js'></script>
</body>
</html>
"@ | Set-Content "calculators\$file.html"
}

# Policy pages
@"
<!DOCTYPE html>
<html><head><title>Privacy Policy</title></head>
<body><h1>Privacy Policy</h1></body></html>
"@ | Set-Content "policies\privacy.html"

@"
<!DOCTYPE html>
<html><head><title>Terms and Conditions</title></head>
<body><h1>Terms and Conditions</h1></body></html>
"@ | Set-Content "policies\terms.html"

# CSS files
"body { font-family: Arial; background: #f9f9f9; }" | Set-Content "css/style.css"
".calculator { padding: 20px; background: white; }" | Set-Content "css/calculator.css"

# JS files
"console.log('Main JS loaded');" | Set-Content "js/main.js"

foreach ($file in $calculatorFiles) {
  "console.log('$file calculator script loaded');" | Set-Content "js/$file.js"
}

# Image placeholders
"" | Set-Content "images/logo.png"
"" | Set-Content "images/favicon.ico"
