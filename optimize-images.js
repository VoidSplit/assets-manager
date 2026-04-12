import sharp from 'sharp';
import fs from 'fs';

const inputDir = './src/assets/images/original';
const outputDir = './src/assets/images/avif/optimized';

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach(file => {
  if (file.endsWith('.png')) {
    const inputPath = `${inputDir}/${file}`;
    const outputPath = `${outputDir}/${file.replace('.png', '.avif')}`;

    sharp(inputPath)
      .resize(530, 278, {
        fit: 'cover' // ou 'inside' selon ton besoin
      })
      .avif({ quality: 80 })
      .toFile(outputPath)
      .then(() => console.log(`Optimized: ${file}`))
      .catch(err => console.error(err));
  }
});