const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const publicDir = path.join(__dirname, 'public');

fs.readdirSync(publicDir).forEach(file => {
  if (file.match(/^art.*\.(png|jpg|jpeg)$/) || file.match(/^proj.*\.(png|jpg|jpeg)$/)) {
    const filePath = path.join(publicDir, file);
    const newPath = path.join(publicDir, file.replace(/\.(png|jpg|jpeg)$/, '_web.jpg'));
    
    sharp(filePath)
      .flatten({ background: { r: 0, g: 0, b: 0 } }) // Convert transparency to black
      .jpeg({ quality: 80, force: true }) // Force standard JPEG
      .toFile(newPath)
      .then(() => {
        console.log(`Converted ${file} to ${newPath}`);
      })
      .catch(err => console.error(`Error with ${file}:`, err));
  }
});
