const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceColors(content) {
  let newContent = content;
  
  // Replace previous Force blue with new Force Navy Blue
  newContent = newContent.replace(/#005EA8/gi, '#003B71');

  // Replace RGB values of previous blue
  newContent = newContent.replace(/0,\s*94,\s*168/g, '0, 59, 113');
  newContent = newContent.replace(/rgba\(0,\s*94,\s*168/g, 'rgba(0, 59, 113');

  return newContent;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.html') || filePath.endsWith('.svg')) {
      const content = fs.readFileSync(filePath, 'utf8');
      const newContent = replaceColors(content);
      if (content !== newContent) {
        fs.writeFileSync(filePath, newContent, 'utf8');
        console.log(`Updated ${filePath}`);
      }
    }
  }
}

walkDir(srcDir);
console.log("Done");
