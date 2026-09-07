const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'src', 'components', 'Hero.tsx');
let content = fs.readFileSync(filePath, 'utf8');

// Replace `#0033A0` with `#006CB5`
content = content.replace(/#0033A0/g, '#006CB5');
content = content.replace(/#0033a0/gi, '#006CB5');

// Replace `rgba(0,51,160` with `rgba(0,108,181`
content = content.replace(/0,51,160/g, '0,108,181');
content = content.replace(/rgba\(0,\s*51,\s*160/g, 'rgba(0, 108, 181');

fs.writeFileSync(filePath, content, 'utf8');
console.log("Hero updated");
