import fs from 'fs';
if(fs.existsSync('./README.md')){
    fs.unlinkSync('./README.md');
}
fs.cpSync('./docs/modules.md','./README.md');

if(fs.existsSync('./modules.md')){
    fs.unlinkSync('./modules.md');
}
fs.cpSync('./docs/modules.md','./modules.md');


//.docs/enums
const files = fs.readdirSync('./docs/enums');
files.forEach((file) => {
    const source = `./enums/${file}`;
    const buildSource = `./docs/enums/${file}`;
    if(fs.existsSync(source)){
        fs.unlinkSync(source);
    }
    fs.cpSync(buildSource,source);
    
})
