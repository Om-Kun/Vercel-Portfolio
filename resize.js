const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

fs.readdirSync(publicDir).forEach(file => {
  if (file.match(/\.(jpg|jpeg|png)$/)) {
    const filePath = path.join(publicDir, file);
    const tempPath = path.join(publicDir, `temp_${file}`);
    
    sharp(filePath)
      .resize({ width: 1200, withoutEnlargement: true }) // WebGL safe size
      .toFile(tempPath)
      .then(() => {
        fs.renameSync(tempPath, filePath);
        console.log(`Resized ${file}`);
      })
      .catch(err => console.error(`Error with ${file}:`, err));
  }
});
