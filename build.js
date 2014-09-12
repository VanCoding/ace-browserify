var cp = require("child_process");
var fs = require("fs");

cp.exec("git clone git://github.com/ajaxorg/ace-builds.git \""+__dirname+"/ace\"",function(){     
    var files = fs.readdirSync(__dirname+"/ace/src-min-noconflict/");
    var full = "module.exports = require('./ace.js');";
    for(var i = 0; i < files.length; i++){           
        if(!fs.statSync(__dirname+"/ace/src-min-noconflict/"+files[i]).isFile()) {
            continue;
        }
        var code = fs.readFileSync(__dirname+"/ace/src-min-noconflict/"+files[i]);        
        if(files[i] == "ace.js"){
            code += "\r\nmodule.exports = window.ace.require('ace/ace');";
        }else{
            full += "\r\nrequire('./"+files[i]+"');";
        }
        fs.writeFile(__dirname+"/"+files[i],code)
    }
    fs.writeFile(__dirname+"/full.js",full);
});