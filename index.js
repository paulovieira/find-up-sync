var Fs = require('fs');
var Path = require('path');

function findUpSync(pattern){

    var configFile, currentDir = Path.resolve(__dirname, '.');

    while(true){

        try{
            configFile = Path.join(currentDir, pattern);

            if(Fs.statSync(configFile).isFile()){
                break;
            }
        }
        catch(e){
            // ignore error; continue searching in the parent dir;
        }

        configFile = undefined;
        currentDir = Path.resolve(currentDir, '..');
        if(currentDir === '/'){
            break;
        }
    }

    return configFile;
}

module.exports = findUpSync;
