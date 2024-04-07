import fs from 'fs';
if(fs.existsSync('./README.md')){
    fs.unlinkSync('./README.md');
}
fs.cpSync('./docs/modules.md','./README.md');
