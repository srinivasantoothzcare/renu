Add-Type -AssemblyName System.Drawing
$in = "c:\Users\901969\Documents\Renu\caredent\cursor.png"
$bmp = New-Object System.Drawing.Bitmap $in

# Find the bounding box
$minX = $bmp.Width
$minY = $bmp.Height
for ($y = 0; $y -lt $bmp.Height; $y++) {
    for ($x = 0; $x -lt $bmp.Width; $x++) {
        $c = $bmp.GetPixel($x, $y)
        if ($c.A -gt 10) {
            if ($x -lt $minX) { $minX = $x }
            if ($y -lt $minY) { $minY = $y }
        }
    }
}
Write-Output "Hotspot X: $minX, Hotspot Y: $minY"

$bmp.Dispose()
