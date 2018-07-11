// import entry from "./entry";
import fs from 'fs';
// entry();

console.log(__dirname);

const string = fs.readFileSync(__dirname+'./../1.txt', 'utf8');//fs.readFilesSync(__dirname+"../1.txt",'utf8');
document.write(string);