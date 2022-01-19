// LOCAL MODULES ////////////////////////////////////////////////////////////

var log = {
    info: function(info){
        console.log("infos:" + info)
    },
    warning: function(warning) {
        console.log('Warning:' + warning)
    },
    error:function(error) {
        console.log('Error:' + error)
    }
};

//Exporting my modules....

module.exports = log;