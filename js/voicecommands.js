if (annyang) {
    var commands = {
        'next': function() {
            console.log("next"); 
        }
    };

    annyang.addCommands(commands);
    annyang.start();
}
