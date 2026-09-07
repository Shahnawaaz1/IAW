const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceColors(content) {
  let newContent = content;
  
  // Replace previous Navy blue with new primary blue
  newContent = newContent.replace(/#003B71/gi, '#006CB5');
  newContent = newContent.replace(/#003b71/gi, '#006CB5');

  // Replace RGB values of previous blue
  newContent = newContent.replace(/0,\s*59,\s*113/g, '0, 108, 181');
  newContent = newContent.replace(/rgba\(0,\s*59,\s*113/g, 'rgba(0, 108, 181');

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
