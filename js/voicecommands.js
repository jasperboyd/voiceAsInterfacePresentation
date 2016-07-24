var api = impress();
api.init();

function startVoice(){
    if (annyang) {
        var commands = {
            'next': function() {
                console.log("you said 'next'!");
                api.next();
            },
            'previous': function() {
                console.log("you said 'previous'!"); 
                var api = impress();
                api.prev();
            },
            'this is awesome': function() {
                console.log("awesome!"); 
            }
        };

        annyang.addCommands(commands);
        annyang.start({ autoRestart: true, continuous: true });
    }
}

