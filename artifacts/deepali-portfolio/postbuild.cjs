const fs = require('fs');
const path = require('path');

const distDir = path.resolve(__dirname, 'dist');
const publicDir = path.resolve(distDir, 'public');

if (fs.existsSync(distDir)) {
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true });
  }
  const items = fs.readdirSync(distDir);
  for (const item of items) {
    if (item === 'public') continue;
    const srcPath = path.join(distDir, item);
    const destPath = path.join(publicDir, item);
    fs.cpSync(srcPath, destPath, { recursive: true });
  }
}
