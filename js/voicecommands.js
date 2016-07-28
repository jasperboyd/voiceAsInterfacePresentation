var api = impress();
api.init();

function startVoice(){
    if (annyang) {
        annyang.debug(true);

        var mute = false; 
        var voices = window.speechSynthesis.getVoices();
        var chosenVoice = voices[0]; 
    
        var commands = {
            'next': function() {
                console.log("you said 'next'!");
                if(!mute){
                    var msg = new SpeechSynthesisUtterance('Proceeding to next slide');
                    window.speechSynthesis.speak(msg);
                }
                api.next();
            },
            'previous': function() {
                console.log("you said 'previous'!"); 
                if(!mute){
                    var msg = new SpeechSynthesisUtterance('Ok Going Back Now');
                    window.speechSynthesis.speak(msg);
                }
                var api = impress();
                api.prev();
            },
            'computer stop talking': function() {
                mute = true; 
                var msg = new SpeechSynthesisUtterance('Ok Shutting Up Now'); 
                window.speechSynthesis.speak(msg); 
            },
            'computer start talking': function() {
                mute = false; 
                var msg = new SpeechSynthesisUtterance('Thank you for the permission'); 
                window.speechSynthesis.speak(msg); 
            },
            'computer are you listening' : function() {
                var msg = new SpeechSynthesisUtterance("I'm listening with baited breath");
                window.speechSynthesis.speak(msg); 
            },
            'computer change your voice' : function() {
                var rolledDice = Math.floor((Math.random() * voices.length));//0-length
                chosenVoice = voices[rolledDice]; 

            }
        };

        annyang.addCommands(commands);
        annyang.start({ autoRestart: true, continuous: true });
    }
}

