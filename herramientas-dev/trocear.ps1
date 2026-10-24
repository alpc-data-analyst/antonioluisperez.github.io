# Parte una captura alta en trozos para revisarlos a buena resolucion.
# Uso: powershell -ExecutionPolicy Bypass -File herramientas-dev\trocear.ps1 -Ruta captura.png [-Alto 1100]
# Deja captura-1.png, captura-2.png... junto a la original.
param([Parameter(Mandatory = $true)][string]$Ruta, [int]$Alto = 1100)
Add-Type -AssemblyName System.Drawing
$img = [System.Drawing.Image]::FromFile($Ruta)
$base = [System.IO.Path]::ChangeExtension($Ruta, $null).TrimEnd('.')
$n = 0
for ($y = 0; $y -lt $img.Height; $y += $Alto) {
    $h = [Math]::Min($Alto, $img.Height - $y)
    $bmp = New-Object System.Drawing.Bitmap $img.Width, $h
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.DrawImage($img, (New-Object System.Drawing.Rectangle 0, 0, $img.Width, $h), (New-Object System.Drawing.Rectangle 0, $y, $img.Width, $h), [System.Drawing.GraphicsUnit]::Pixel)
    $n++
    $bmp.Save("$base-$n.png", [System.Drawing.Imaging.ImageFormat]::Png)
    $g.Dispose(); $bmp.Dispose()
}
$img.Dispose()
"$n trozos"
