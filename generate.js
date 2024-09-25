import sharp from 'sharp'

await new sharp('DSC_1925.jpg').rotate().webp({ quality: 80 }).toFile('DSC_1925_noResize.webp')
await new sharp('DSC_1925.jpg').rotate().resize({ width: 2000 }).webp({ quality: 80 }).toFile('DSC_1925_resize.webp')
await new sharp('DSC_1925.jpg').rotate().resize({ width: 2000 }).toFormat('webp', { quality: 80 }).toFile('DSC_1925_resize_toformat.webp')

console.log("Generated benchmark images")