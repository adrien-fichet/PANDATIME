var audioContext;
var soundboard = $("#soundboard");
var buttonBackgroundColor = "rgba(0, 0, 0, 0.2)";
var isUltraPandaTime = false;

var sounds = {
    "aaahhh": {
        "filename": "aaahhh.mp3",
        "title": "AAAAH",
        "type": "sound",
        "key": "a"},
    "hmm": {
        "filename": "hmm.mp3",
        "title": "HMMMM",
        "type": "sound",
        "key": "h"},
    "i_show_you_my_manliness": {
        "filename": "i_show_you_my_manliness.mp3",
        "title": "I show you my manliness!",
        "type": "sound",
        "key": "i"},
    "ooooh_yes": {
        "filename": "ooooh_yes.mp3",
        "title": "OuuH YES",
        "type": "sound",
        "key": "o"},
    "teldo_panda_time": {
        "filename": "teldo_panda_time.mp3",
        "title": '<img src="img/pandatime.png" alt="" /> Pandatime!',
        "type": "sound"},
    "xeph_aaahaha": {
        "filename": "xeph_aaahaha.mp3",
        "title": "Xeph AaaaAhAH",
        "type": "sound",
        "key": "x"},
    "xeph_schmetterling": {
        "filename": "xeph_schmetterling.mp3",
        "title": '<img src="img/schmetterling.png" alt="" /> SCHMETTERLING!',
        "type": "sound"},
    "gg": {
        "filename": "gg.mp3",
        "title": '<img src="img/gg.png" alt="" /> button',
        "type": "sound",
        "key": "g"},
    "panda_time": {
        "filename": "panda_time.mp3",
        "title": 'Panda Time',
        "type": "loop",
        "key": "p"},
    "aww_yeah": {
        "filename": "aww_yeah.mp3",
        "title": "Aww Yeah",
        "type": "sound"},
    "bloo_bloop": {
        "filename": "bloo_bloop.mp3",
        "title": "Bloo Bloop",
        "type": "sound"},
    "okaaay": {
        "filename": "okaaay.mp3",
        "title": "Okaaay",
        "type": "sound"},
    "huoaww": {
        "filename": "huoaww.mp3",
        "title": "HUOAWWW!!!",
        "type": "sound"},
    "the_dream_guys": {
        "filename": "the_dream_guys.mp3",
        "title": "The DREAM Guys!",
        "type": "sound"},
    "bam": {
        "filename": "bam.mp3",
        "title": "BAM!",
        "type": "sound"},
    "hihihi": {
        "filename": "hihihi.mp3",
        "title": '<img src="img/hihihi.png" alt="" /> Hihihi!',
        "type": "sound"},
    "nooo": {
        "filename": "nooo.mp3",
        "title": "NOOOOO! NNOOOOOAAAAHaaha!",
        "type": "sound"},
    "evil_laugh": {
        "filename": "evil_laugh.mp3",
        "title": "Evil laugh",
        "type": "sound",
        "key": "e"},
    "om_nom_nom_nom": {
        "filename": "om_nom_nom_nom.mp3",
        "title": '<img src="img/chogath.png" alt="" /> Om Nom Nom Nom Nom',
        "type": "sound"},
    "im_stronger_than_you": {
        "filename": "im_stronger_than_you.mp3",
        "title": "I'm stronger than you!",
        "type": "sound"},
    "woops": {
        "filename": "woops.mp3",
        "title": "Woops!",
        "type": "sound"},
    "sticky_pup": {
        "filename": "sticky_pup.mp3",
        "title": '<img src="img/stickypup.png" alt="" /> Sticky pup',
        "type": "sound"},
    "tuturu": {
        "filename": "tuturu.mp3",
        "title": '<img src="img/tuturuu.png" alt="" /> Tuturuuu!',
        "type": "kacey"},
    "what_time_is_it": {
        "filename": "what_time_is_it.mp3",
        "title": "It's time...",
        "type": "sound"},
    "aaah_hm_hm_hm_hm_hm_bam": {
        "filename": "aaah_hm_hm_hm_hm_hm_bam.mp3",
        "title": "Bwunnie slap",
        "type": "sound"},
    "aaoooww": {
        "filename": "aaoooww.mp3",
        "title": "Aaooow!",
        "type": "sound"},
    "bloobloobloop": {
        "filename": "bloobloobloop.mp3",
        "title": "BLOOBLOOBLOOBLOOB",
        "type": "sound"},
    "evil_laugh_fusion": {
        "filename": "evil_laugh_fusion.mp3",
        "title": "Evil laugh Fusion!",
        "type": "sound"},
    "im_going_in": {
        "filename": "im_going_in.mp3",
        "title": "I'm going IN!",
        "type": "sound"},
    "oh": {
        "filename": "oh.mp3",
        "title": "Oh!",
        "type": "sound"},
    "kacey_aaaaah": {
        "filename": "kacey_aaaaah.mp3",
        "title": '<img src="img/bidoof.gif" alt="" /> AAAAAH!',
        "type": "kacey"},
    "kacey_laugh": {
        "filename": "kacey_laugh.mp3",
        "title": '<img src="img/pika.png" alt="" /> uhuhuhuhuh?',
        "type": "kacey"},
    "kacey_laugh2": {
        "filename": "kacey_laugh2.mp3",
        "title": '<img src="img/bulba.gif" alt="" /> uh, ha! uhuhuhuh!',
        "type": "kacey"},
    "kacey_oh_no": {
        "filename": "kacey_oh_no.mp3",
        "title": '<img src="img/pidgey.gif" alt="" /> Oh, Noooo!',
        "type": "kacey"},
    "kacey_oooooh": {
        "filename": "kacey_oooooh.mp3",
        "title": '<img src="img/charmander.gif" alt="" /> Oooooh',
        "type": "kacey"},
    "kacey_speaks_japanese": {
        "filename": "kacey_speaks_japanese.mp3",
        "title": '<img src="img/ponyta.gif" alt="" /> Kacey speaks Japanese',
        "type": "kacey"},
    "kacey_waaa": {
        "filename": "kacey_waaa.mp3",
        "title": '<img src="img/caterpie.gif" alt="" /> Waaah!',
        "type": "kacey"},
    "nyark_nyark_oooh_oh_oh": {
        "filename": "nyark_nyark_oooh_oh_oh.mp3",
        "title": "Ha Nyark nyark OOOOh oh oh",
        "type": "sound"},
    "kacey_oouuuh": {
        "filename": "kacey_oouuuh.mp3",
        "title": '<img src="img/paras.gif" alt="" /> Ooooooh',
        "type": "kacey"},
    "oulalalalalaaaaaa": {
        "filename": "oulalalalalaaaaaa.mp3",
        "title": "OulalalalalalAAARgh",
        "type": "sound"},
    "strange_sounds": {
        "filename": "strange_sounds.mp3",
        "title": '<img src="img/beedrill.gif" alt="" /> guh guh guh, Guh! hngg',
        "type": "kacey"},
    "teeemoooo": {
        "filename": "teeemoooo.mp3",
        "title": '<img src="img/teemo.jpg" alt="" /> TEEEMOOOOOO!!!!',
        "type": "kacey"},
    "ohhhh": {
        "filename": "ohhhh.mp3",
        "title": "Aahhhh",
        "type": "sound"},
    "yarr_yu_yarr_yu_yarr_oouh": {
        "filename": "yarr_yu_yarr_yu_yarr_oouh.mp3",
        "title": "Yarr yu yarr yu yarr OOOOh!",
        "type": "sound"},
    "pika_pi": {
        "filename": "pika_pi.mp3",
        "title": '<img src="img/pikapi.png" alt="" /> Pika pi!',
        "type": "sound"},
    "shiggy": {
        "filename": "shiggy.mp3",
        "title": '<img src="img/shiggy.gif" alt="" /> SHIGGYYY!!',
        "type": "sound"},
    "teldo_singing_pandatime": {
        "filename": "teldo_singing_pandatime.mp3",
        "title": "Teldo singing Pandatime",
        "type": "loop"},
    "pizza_pizza": {
        "filename": "pizza_pizza.mp3",
        "title": '<img src="img/pizza.png" alt="" /> Pizza Pizza Teldo Bwunnie <3',
        "type": "loop"},
    "they_want_us": {
        "filename": "they_want_us.mp3",
        "title": "They want us",
        "type": "loop",
        "key": "t"},
    "sexy_music": {
        "filename": "sexy_music.mp3",
        "title": '<img src="img/saxo.png" alt="" /> Sexy Music',
        "type": "loop"},
    "more_sexy_music": {
        "filename": "more_sexy_music.mp3",
        "title": "More sexy music",
        "type": "loop"},
    "pummeluff": {
        "filename": "pummeluff.mp3",
        "title": '<img src="img/pumeluff.gif" alt="" /> La, lala lala Pumeluff...',
        "type": "loop"}
};

var soundKeys = Object.keys(sounds);
var currentSoundLoading = 0;

$(document).ready(main);

function main() {
    try {
        window.AudioContext = window.AudioContext || window.webkitAudioContext;
        audioContext = new AudioContext();
    }
    catch (e) {
        return;
    }

    $("#soundboard").css("display", "block");
    $("#error").css("display", "none");

    loadSound();
}

function loadSound() {
    var request = new XMLHttpRequest();
    request.open("GET", "sound/" + sounds[soundKeys[currentSoundLoading]].filename, true);
    request.responseType = "arraybuffer";
    request.key = soundKeys[currentSoundLoading];
    request.onload = onSoundLoad;
    request.send();
}

function onSoundLoad(xhr) {
    var key = xhr.target.key;

    audioContext.decodeAudioData(xhr.target.response, function(buffer) {
        sounds[key].buffer = buffer;
        var button = '<button id="' + key + '" ';

        if (sounds[key].type === "sound" || sounds[key].type === "kacey") {
            button += 'onclick="playSound(\'' + key + '\');" ';
        }
        else if (sounds[key].type === "loop") {
            button += 'onclick="playLoop(\'' + key + '\');" ';
        }

        if (sounds[key].key) {
            button += 'class="key" ';
        }

        button += '>' + sounds[key].title + '</button>';
        $("#" + sounds[key].type + "Div").append(button);

        if (++currentSoundLoading < soundKeys.length) {
            loadSound();
        }
    }, function() {
    });
}

function playSound(key) {
    if (sounds[key].source) {
        sounds[key].source.stop(0);
        sounds[key].source.onended = null;
        sounds[key].source = null;
        $("#" + key).css("background-color", buttonBackgroundColor);
    }

    if (!sounds[key].source) {
        sounds[key].source = audioContext.createBufferSource();
        sounds[key].source.buffer = sounds[key].buffer;
        sounds[key].source.connect(audioContext.destination);
        $("#" + key).css("background-color", "lime");
        sounds[key].source.start(0);

        sounds[key].source.onended = function() {
            $("#" + key).css("background-color", buttonBackgroundColor);
        };
    }
}

function playLoop(key) {
    if (sounds[key].source) {
        sounds[key].source.stop(0);
        sounds[key].source.onended = null;
        sounds[key].source = null;
        $("#" + key).css("background-color", buttonBackgroundColor);
    }
    else {
        sounds[key].source = audioContext.createBufferSource();
        sounds[key].source.buffer = sounds[key].buffer;
        sounds[key].source.connect(audioContext.destination);
        sounds[key].source.loop = true;
        $("#" + key).css("background-color", "orange");
        sounds[key].source.start(0);
    }
}

$(document).keypress(function(k) {
    var charCode = String.fromCharCode(k.which);

    if (charCode === "s") {
        stopAllSounds();
    }
    else if (charCode === "u") {
        ultraPandatime();
    }
    else {
        for (var key in sounds) {
            if (sounds[key].key === charCode) {
                if (sounds[key].type === "sound") {
                    playSound(key);
                }
                else if (sounds[key].type === "loop") {
                    playLoop(key);
                }
            }
        }
    }
});

function stopAllSounds() {
    for (var key in sounds) {
        if (sounds[key].source) {
            sounds[key].source.stop(0);
            sounds[key].source.onended = null;
            sounds[key].source = null;
            $("#" + key).css("background-color", buttonBackgroundColor);
        }
    }
}

function ultraPandatime() {
    if (!isUltraPandaTime) {
        isUltraPandaTime = true;
        $("#ultraPandatime").html("GTFO!!!");
        $("body").css("background", 'url("img/stars.gif") repeat center center fixed');
        $("body").css("-webkit-background-size", "auto");
        $("body").css("-moz-background-size", "auto");
        $("body").css("-o-background-size", "auto");
        $("body").css("background-size", "auto");
        $("#dancingPanda").css("display", "inline");
        $("#dancingPandaSmall").css("display", "inline");
        $("#pandaKiss").css("display", "inline");
        $("#giphy").css("display", "inline");
        $("#pandaRoll").css("display", "inline");

        if (sounds["panda_time"].source) {
            sounds["panda_time"].source.stop(0);
            sounds["panda_time"].source.onended = null;
            sounds["panda_time"].source = null;
            $("#" + "panda_time").css("background-color", buttonBackgroundColor);
        }

        sounds["panda_time"].source = audioContext.createBufferSource();
        sounds["panda_time"].source.buffer = sounds["panda_time"].buffer;
        sounds["panda_time"].source.connect(audioContext.destination);
        sounds["panda_time"].source.loop = true;
        $("#" + "panda_time").css("background-color", "orange");
        sounds["panda_time"].source.start(0);

    }
    else {
        isUltraPandaTime = false;
        $("#ultraPandatime").html("ULTRA PANDA TIME!!!");
        $("body").css("background", 'url("img/panda.jpg") no-repeat center center fixed');
        $("body").css("-webkit-background-size", "cover");
        $("body").css("-moz-background-size", "cover");
        $("body").css("-o-background-size", "cover");
        $("body").css("background-size", "cover");
        $("#dancingPanda").css("display", "none");
        $("#dancingPandaSmall").css("display", "none");
        $("#pandaKiss").css("display", "none");
        $("#giphy").css("display", "none");
        $("#pandaRoll").css("display", "none");

        if (sounds["panda_time"].source) {
            sounds["panda_time"].source.stop(0);
            sounds["panda_time"].source.onended = null;
            sounds["panda_time"].source = null;
            $("#" + "panda_time").css("background-color", buttonBackgroundColor);
        }
    }
}


