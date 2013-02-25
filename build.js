var cp = require("child_process");
var fs = require("fs");

cp.exec("git clone git://github.com/ajaxorg/ace-builds.git \""+__dirname+"/ace\"",function(){        
    var files = fs.readdirSync(__dirname+"/ace/src-min-noconflict/");
    for(var i = 0; i < files.length; i++){
        fs.writeFile(__dirname+"/"+files[i],fs.readFileSync(__dirname+"/ace/src-min-noconflict/"+files[i]))
    }    
});