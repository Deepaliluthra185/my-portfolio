const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const artifactDist = path.resolve(rootDir, 'artifacts/deepali-portfolio/dist');
const rootDist = path.resolve(rootDir, 'dist');

if (fs.existsSync(artifactDist)) {
  fs.rmSync(rootDist, { recursive: true, force: true });
  fs.cpSync(artifactDist, rootDist, { recursive: true });

  const rootPublic = path.resolve(rootDist, 'public');
  if (!fs.existsSync(rootPublic)) {
    fs.cpSync(artifactDist, rootPublic, { recursive: true });
  }
}

