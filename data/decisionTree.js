"use strict";

//define variables
var textToTweet;

//start game
const start = () => {
    frageAusgeben(0);
};

//restart game
const nochEinmal = () => {
    bildWechseln('data/teaser.jpg');
    frageAusgeben(0);
};

//analysis
const auswertung = (result) => {
    $('#quiz').fadeOut('slow', function() {
        $('#quiz').html(`<div class='frage'>${result}</div><div>${resultat[result]}</div><br><br><div class='twitterButton' onclick='twittr("${result}")\'>Resultat twittern</div><br><div class='antwort' onclick='nochEinmal()'>Noch einmal spielen</div>`);
    });
    $('#quiz').fadeIn('slow');
    bildWechseln(`data/${result}.jpg`);
    log(result);
};

//next question
const weiter = (nr, i) => {
    ga('send', 'event', 'button', data[nr].antworten[i].nxt, '2018Ferienplaner');
    if (isNaN(data[nr].antworten[i].nxt)) {
        auswertung(data[nr].antworten[i].nxt);
    }
    else {
        frageAusgeben(data[nr].antworten[i].nxt);
    }
};

const frageAusgeben = (nr) => {
    $('#quiz').fadeOut("slow", function() {
        $('#quiz').html(`<div class='frage'>${data[nr].frage}</div>`);
        for (let i = 0; i < data[nr].antworten.length; i++) {
            $('#quiz').append(`<div id='antwort${nr}.${i}' class='antwort' onClick='weiter(${nr}, ${i})'>${data[nr].antworten[i].aw}</div>`);
        }
    $('#quiz').fadeIn("slow");
    });
};

//Helperfunctions
//change Image
const bildWechseln = (url) => {
    $('#introBild').fadeOut('slow', function() {
        document.getElementById('teaser').src=url;
    });
    $('#introBild').fadeIn('slow');
}

//twittern
const twittr = (result) => {
    textToTweet = `Die BZ rät mir ${twtext[result]}. Und Dir? Zum Ferienplaner: www.bzgrafik.ch/interaktiv/2018ferienplaner`;
    var twtLink = `https://twitter.com/intent/tweet?url=[www.bzgrafik.ch]&text=${textToTweet} `;
    window.open(twtLink, '_blank');
};

//log
const log = (result) => {
        var data = new FormData();
        data.append('data', result);
        var xhr = new XMLHttpRequest();
        xhr.open('post', 'data/log.php', true);
        xhr.send(data);
};

const data = {};
data[0] = {
    frage:"Berge oder Meer?", 
    antworten: [
        {aw:"Berge!", nxt:1},
        {aw:"Meer!", nxt:2},
        {aw:"Ähm...", nxt:3},
        {aw:"Beides hat seinen Reiz.", nxt:4}
    ]
};
data[1] = {
    frage:"Ausschliesslich?", 
    antworten: [
        {aw:"Ausschliesslich!", nxt:"Wandern"},
        {aw:"Kommt darauf an...", nxt:5}
    ]
};
data[2] = {
    frage:"Ruhe oder Party?", 
    antworten: [
        {aw:"Party.", nxt:6},
        {aw:"Ruhe.", nxt:7}
    ]
};
data[3] = {
    frage:"Was erwarten Sie von Ferien?", 
    antworten: [
        {aw:"Ruhe.", nxt:7},
        {aw:"Ich fahre da hin, wo die Anderen hinfahren wollen.", nxt:8},
        {aw:"Nichts, Ferien sind doof!", nxt:9}
    ]
};
data[4] = {
    frage:"Sind Sie der anspruchsvolle Typ?", 
    antworten: [
        {aw:"Ja.", nxt:3},
        {aw:"Nein.", nxt:6},
        {aw:"Kommt darauf an...", nxt:5}
    ]
};
data[5] = {
    frage:"Worauf?", 
    antworten: [
        {aw:"Auf die Begleitung.", nxt:8},
        {aw:"Auf das Wetter.", nxt:10},
        {aw:"Auf die Musik.", nxt:11}
    ]
};
data[6] = {
    frage:"Zelt?", 
    antworten: [
        {aw:"Auf keinen Fall!", nxt:"Partyferien"},
        {aw:"Ja!", nxt:"Campen"},
    ]
};
data[7] = {
    frage:"Verbunden mit einem Abenteuer?", 
    antworten: [
        {aw:"Lieber nicht.", nxt:"Bungalow"},
        {aw:"Ja gern.", nxt:"Roadtrip"}
    ]
};
data[8] = {
    frage:"Mit wem sind Sie unterwegs?", 
    antworten: [
        {aw:"Familie.", nxt:12},
        {aw:"Mit Freunden.", nxt:13}
    ]
};
data[9] = {
    frage:"Warum?", 
    antworten: [
        {aw:"Zu anstrengend.", nxt:"Balkonien"},
        {aw:"Konsum. Da bin ich dagegen.", nxt:14}
    ]
};
data[10] = {
    frage:"Mögen Sie es heiss?", 
    antworten: [
        {aw:"Ja!", nxt:8},
        {aw:"Phu, nein.", nxt:15}
    ]
};
data[11] = {
    frage:"Welche Musik mögen Sie?", 
    antworten: [
        {aw:"Das lokale Musikschaffen der Ethnie des Zielorts.", nxt:16},
        {aw:"Hauptsache mitgrölen.", nxt:6},
        {aw:"Wagner, nur Wagner.", nxt:"Festspiele"}
    ]
};
data[12] = {
    frage:"Wird Ihren Kindern schnell übel?", 
    antworten: [
        {aw:"Nein.", nxt:"Bungalow"},
        {aw:"O ja.", nxt:"Campen"}
    ]
};
data[13] = {
    frage:"Freunde?", 
    antworten: [
        {aw:"Die vom Literaturzirkel.", nxt:"Festspiele"},
        {aw:"Ja, Saufkumpels.", nxt:6}
    ]
};
data[14] = {
    frage:"Gegen eine Bildungsreise haben Sie aber nichts einzuwenden?", 
    antworten: [
        {aw:"Doch", nxt:"Balkonien"},
        {aw:"Reisen finde ich gut.", nxt:"Roadtrip"},
        {aw:"Nein, wenn Wagner gespielt wird.", nxt:"Festspiele"}
    ]
};
data[15] = {
    frage:"Tragen Sie Wandersocken?", 
    antworten: [
        {aw:"Ja.", nxt:"Wandern"},
        {aw:"Iih, nein!", nxt:"Balkonien"}
    ]
};
data[16] = {
    frage:"Also... wie?", 
    antworten: [
        {aw:"Musikwelle 531.", nxt:15},
        {aw:"So, wie ichs sage.", nxt:"Roadtrip"}
    ]
};

const resultat = {};
resultat["Wandern"] = "Hier kommt ein Satz und ein passendes Bild. Wandern im Berner Oberland.";
resultat["Bungalow"] = "Hier kommt ein Satz und ein passendes Bild. Bungalow am Mittelmeer";
resultat["Balkonien"] = "Hier kommt ein Satz und ein passendes Bild. Balkonien.";
resultat["Partyferien"] = "Hier kommt ein Satz und ein passendes Bild. Partyferien auf Ibizza";
resultat["Roadtrip"] = "Hier kommt ein Satz und ein passendes Bild. Roadtrip durch Albanien";
resultat["Campen"] = "Hier kommt ein Satz und ein passendes Bild. Campen am Neuenburgersee";
resultat["Festspiele"] = "Hier kommt ein Satz und ein passendes Bild. Bayreuther Festspiele.";
const twtext = {};
twtext["Wandern"] = "zu Wanderferien im Berner Oberland";
twtext["Bungalow"] = "zu einem Bungalow am Mittelmeer";
twtext["Balkonien"] = "zu Ferien in Balkonien";
twtext["Partyferien"] = "zu Partyferien auf Ibizza";
twtext["Roadtrip"] = "zu einem Roadtrip durch Albanien";
twtext["Campen"] = "zum Campen am Neuenburgersee";
twtext["Festspiele"] = "zu den Bayreuther Festspielen";
start();