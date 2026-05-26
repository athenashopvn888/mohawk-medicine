const fs = require('fs');
const path = require('path');

const replacements = [
  { search: /123 Shared Street/g, replace: '2655 Eglinton Ave E' },
  { search: /Mohawk, ON K0K 0K0/g, replace: 'Toronto, ON M1K 2S2' },
  { search: /Jane St(?:reet)? & Lawrence Ave W/g, replace: 'Eglinton Ave E' },
  { search: /\bJane St(?:reet)?\b/g, replace: 'Eglinton Ave E' },
  { search: /After Dark Cannabis/ig, replace: 'Mohawk Medicine' },
  { search: /After Dark/ig, replace: 'Mohawk Medicine' },
  { search: /after_dark_welcome_banner.webp/g, replace: 'mohawk_welcome_banner.png' },
  { search: /after_dark_([a-z_]+)_banner\.webp/g, replace: 'mohawk_banner_$1.webp' },
  { search: /Blouds_Contact_Us\.webp/g, replace: '08_Contact_Us.webp' },
  { search: /1664 Jane St, York, ON M9N 2S1/g, replace: '2655 Eglinton Ave E, Toronto, ON M1K 2S2' },
  { search: /York Dispensary/g, replace: 'Dispensary' },
  { search: /York, ON/g, replace: 'Toronto, ON' },
  { search: /York/g, replace: 'Toronto' }
];

function processDirectory(directory) {
  fs.readdirSync(directory).forEach(file => {
    const fullPath = path.join(directory, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.ts') || fullPath.endsWith('.tsx') || fullPath.endsWith('.css')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      replacements.forEach(({ search, replace }) => {
        if (search.test(content)) {
          content = content.replace(search, replace);
          modified = true;
        }
      });
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated: ${fullPath}`);
      }
    }
  });
}

processDirectory(path.join(__dirname, 'app'));
console.log('Done!');
