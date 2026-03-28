Add-Type -AssemblyName System.Drawing
$source = [System.Drawing.Bitmap]::FromFile('c:\Users\Administrator\Downloads\MiaElizabeth-main\1774738087.png')
$bmp = New-Object System.Drawing.Bitmap($source.Width, $source.Height)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.DrawImage($source, 0, 0, $source.Width, $source.Height)
$source.Dispose()

# Key white-ish colors to transparent (allowing for some compression noise)
for ($y=0; $y -lt $bmp.Height; $y++) {
    for ($x=0; $x -lt $bmp.Width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -gt 240 -and $pixel.G -gt 240 -and $pixel.B -gt 240) {
            $bmp.SetPixel($x, $y, [System.Drawing.Color]::Transparent)
        }
    }
}

# Find bounding box of the black square
$minX, $minY = $bmp.Width, $bmp.Height
$maxX, $maxY = 0, 0
for ($y=0; $y -lt $bmp.Height; $y++) {
    for ($x=0; $x -lt $bmp.Width; $x++) {
        if ($bmp.GetPixel($x, $y).A -gt 0) {
            if ($x -lt $minX) { $minX = $x }
            if ($x -gt $maxX) { $maxX = $x }
            if ($y -lt $minY) { $minY = $y }
            if ($y -gt $maxY) { $maxY = $y }
        }
    }
}

$rectWidth = $maxX - $minX + 1
$rectHeight = $maxY - $minY + 1
if ($rectWidth -gt 0 -and $rectHeight -gt 0) {
    $croppedBmp = New-Object System.Drawing.Bitmap($rectWidth, $rectHeight)
    $g2 = [System.Drawing.Graphics]::FromImage($croppedBmp)
    $g2.DrawImage($bmp, 0, 0, (New-Object System.Drawing.Rectangle($minX, $minY, $rectWidth, $rectHeight)), [System.Drawing.GraphicsUnit]::Pixel)
    
    # Final Favicon (128x128 for high-res)
    $finalBmp = New-Object System.Drawing.Bitmap(128, 128)
    $g3 = [System.Drawing.Graphics]::FromImage($finalBmp)
    $g3.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g3.DrawImage($croppedBmp, 0, 0, 128, 128)
    $finalBmp.Save('c:\Users\Administrator\Downloads\MiaElizabeth-main\favicon.png', [System.Drawing.Imaging.ImageFormat]::Png)
    $finalBmp.Dispose(); $croppedBmp.Dispose(); $g3.Dispose(); $g2.Dispose()
}
$bmp.Dispose(); $g.Dispose()
