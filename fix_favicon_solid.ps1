Add-Type -AssemblyName System.Drawing
$source = [System.Drawing.Bitmap]::FromFile('c:\Users\Administrator\Downloads\MiaElizabeth-main\1774741087.png')
$size = [System.Math]::Min($source.Width, $source.Height)
$x = ($source.Width - $size) / 2
$y = ($source.Height - $size) / 2

# Create square crop
$croppedBmp = New-Object System.Drawing.Bitmap($size, $size)
$g = [System.Drawing.Graphics]::FromImage($croppedBmp)
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.DrawImage($source, (New-Object System.Drawing.Rectangle(0, 0, $size, $size)), (New-Object System.Drawing.Rectangle($x, $y, $size, $size)), [System.Drawing.GraphicsUnit]::Pixel)

# Save as 128x128 for high-res favicon
$finalBmp = New-Object System.Drawing.Bitmap(128, 128)
$g2 = [System.Drawing.Graphics]::FromImage($finalBmp)
$g2.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g2.DrawImage($croppedBmp, 0, 0, 128, 128)

$finalBmp.Save('c:\Users\Administrator\Downloads\MiaElizabeth-main\favicon.png', [System.Drawing.Imaging.ImageFormat]::Png)

$finalBmp.Dispose(); $croppedBmp.Dispose(); $source.Dispose(); $g.Dispose(); $g2.Dispose()
