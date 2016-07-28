var api = impress();
api.init();

function startVoice(){
    if (annyang) {
        annyang.debug(true);

        var mute = false; 
        var voices = window.speechSynthesis.getVoices();
        var chosenVoice = voices[0]; 
        var chosenRate = 1; 
        var chosenPitch = 2; 

        var commands = {
            'next': function() {
                console.log("you said 'next'!");
                if(!mute){
                    var msg = new SpeechSynthesisUtterance('Proceeding to next slide');
                    msg.voice = chosenVoice; 
                    msg.rate = chosenRate; 
                    msg.pitch = chosenPitch; 
                    window.speechSynthesis.speak(msg);
                }
                api.next();
            },
            'previous': function() {
                console.log("you said 'previous'!"); 
                if(!mute){
                    var msg = new SpeechSynthesisUtterance('Ok Going Back Now');
                    msg.voice = chosenVoice;
                    msg.rate = chosenRate; 
                    msg.pitch = chosenPitch; 
                    window.speechSynthesis.speak(msg);
                }
                var api = impress();
                api.prev();
            },
            'computer stop talking': function() {
                mute = true; 
                var msg = new SpeechSynthesisUtterance('Ok Shutting Up Now'); 
                msg.voice = chosenVoice;
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer start talking': function() {
                mute = false; 
                var msg = new SpeechSynthesisUtterance('Thank you for the permission');
                msg.voice = chosenVoice; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer are you listening' : function() {
                var msg = new SpeechSynthesisUtterance("I'm listening with baited breath");
                msg.voice = chosenVoice; 
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer change your voice' : function() {
                var rolledDice = Math.floor((Math.random() * voices.length));//0-length
                chosenVoice = voices[rolledDice]; 
                var msg = new SpeechSynthesisUtterance("This is my new voice");
                msg.voice = chosenVoice;
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer talk faster' : function() {
                chosenRate = 10; 
                var msg = new SpeechSynthesisUtterance("This is the fastest I know how to say anything, I hope it's good enough for you!");
                msg.voice = chosenVoice; 
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer talk slower' : function() {
                chosenRate = .1; 
                var msg = new SpeechSynthesisUtterance("This is the slowest I can possibly speak!"); 
                msg.voice = chosenVoice; 
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer talk normal' : function() {
                chosenRate = 1; 
                chosenPitch = 1; 
                var msg = new SpeechSynthesisUtterance("Good to be back to normal!");
                msg.voice = chosenVoice; 
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer talk low' : function() {
                chosenPitch = 0; 
                var msg = new SpeechSynthesisUtterance("I have a deep voice");
                msg.voice = chosenVoice;
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer talk high' : function() {
                chosenPitch = 2; 
                var msg = new SpeechSynthesisUtterance("Increasing pitch now");
                msg.voice = chosenVoice; 
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            },
            'computer get me a beer' : function() {
                var msg = new SpeechSynthesisUtterance("What a cruel thing to ask a web application");
                msg.voice = chosenVoice; 
                msg.rate = chosenRate; 
                msg.pitch = chosenPitch; 
                window.speechSynthesis.speak(msg); 
            }
        };

        annyang.addCommands(commands);
        annyang.start({ autoRestart: true, continuous: true });
    }
}

