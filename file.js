const fs = require('fs');

fs.writeFileSync("garou.txt", "this was a blessing");



fs.appendFileSync ("garou.txt", "\nmy fist is now perfected");

let data= fs.readFileSync("garou.txt", 'utf-8');
console.log(data);

fs.renameSync("garou.txt", "garou2.txt");

fs.unlinkSync("garou2.txt");


