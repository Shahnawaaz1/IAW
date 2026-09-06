const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceColors(content) {
  let newContent = content;
  
  // Replace all tailwind red classes with blue classes
  newContent = newContent.replace(/\bred-([1-9]00|50)\b/g, 'blue-$1');
  
  // Replace RGBA red colors (usually #DC2626 which is rgb 220 38 38)
  newContent = newContent.replace(/rgba\(220,\s*38,\s*38/g, 'rgba(11, 87, 208');
  newContent = newContent.replace(/rgba\(239,\s*68,\s*68/g, 'rgba(11, 87, 208'); // #EF4444
  
  // Specific shadow colors that were missed
  newContent = newContent.replace(/shadow-red-600\/40/g, 'shadow-blue-600/40');
  newContent = newContent.replace(/shadow-red-600\/60/g, 'shadow-blue-600/60');
  newContent = newContent.replace(/shadow-red-500\/50/g, 'shadow-blue-500/50');

  // Fix the custom rgba from prompt: "rgba(11, 87, 208, 0.08)" for pills if needed, but standard bg-blue-50 is fine.
  
  return newContent;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
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
