const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');

function replaceColors(content) {
  let newContent = content;
  
  // Replace previous blue hex
  newContent = newContent.replace(/#0B57D0/g, '#005EA8');
  newContent = newContent.replace(/#0b57d0/gi, '#005EA8');

  // Replace RGB values of previous blue
  newContent = newContent.replace(/11,\s*87,\s*208/g, '0, 94, 168');
  newContent = newContent.replace(/rgba\(11,\s*87,\s*208/g, 'rgba(0, 94, 168');

  // We should also replace tailwind standard blues to our custom blue where possible, but maybe they want it ONLY where they have blue.
  // The prompt says: "keval jaha par blue color hai usi ko force ke website par jo blue color hai usse change kardo"
  // Let's replace any `blue-` classes with arbitrary tailwind classes like `[#005EA8]` or maybe just create a tailwind plugin?
  // Let's just update tailwind config to override 'blue' instead of changing all classes!
  
  return newContent;
}

function walkDir(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      walkDir(filePath);
    } else if (filePath.endsWith('.tsx') || filePath.endsWith('.ts') || filePath.endsWith('.css') || filePath.endsWith('.html')) {
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
