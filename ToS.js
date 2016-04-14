var showTerms = false;
var acceptors = 0;
var listening = false;
var denied = false;
var socket = io.connect('http://localhost:3000');
socket.on('rfid', function (data) {
    setTimeout(function () {window.location = "http://localhost:8000"}, 2000)
});

socket.on('button1', function (data) {
        acceptOne();
        console.log("accept");

});

socket.on('button2', function (data) {
    //Deny
    deniedHard();
    console.log('deny');
});

var accept_data = [
    {rights: "accept to have basic server logs storing your IP Adress, Cookies, User-Agent, and Device Identifiers throughout the use of this Companion."},
    {rights: "accept having a Cookie placed in your browser that can be used for targeted services and advertisements."},
    {rights: "accept that even upon deletion of The Cookie from your browser or devices, that they will continue to use Browser and Device Identifiers so that they can have a profile on you."},
    {rights: "accept to have samples of your voiced used in their AI training data sets."},
    {rights: "accept to have your personal desires analyzed and sold to other businesses."},
    {rights: "accept to us potentially selling your data anonymously to perform any type of analysis and modeling that may support e.g., military, academic, or product research."},
    {rights: "extend access to information about the lives of your children in any way that could profit DesignCraft or any of its subsidiaries."},
    {rights: "accept to have your data used for potential acts of 'Exploitation' and/or 'Subversion' against your way of thinking in favor of DesignCraft or our Afilliated Partners."}
];

function preload() {
    akashi = loadFont('font/Akashi.ttf');
    lucida = loadFont('font/Lucida Sans Regular/Lucida Sans Regular.ttf');
}

function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('processing');
    background('rgba(0,0,0,0)');
    setTimeout(termsTime, 1500);

}

function draw() {
    background('rgba(0,0,0,0)');
    textAlign(CENTER);
    textSize(42);
    textFont(akashi);
    fill(255,255,255);
    text("Discover Your Inner Fantasy", windowWidth*.5, windowHeight*.1);
    if (showTerms == true && acceptors < 8 && denied ==false) {
        fill('rgba(20,30,60,100)');
        rect(windowWidth*.30, windowHeight*.25, windowWidth*.4, windowHeight*.5, 10, 10, 10, 10);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(32);
        textFont(lucida);
        text("Terms of Service:", windowWidth*.5, windowHeight*.33);
        textSize(16);
        textAlign(LEFT);
        text("To play this game, DesignCraft asks that you " + accept_data[acceptors].rights + "\n\nPlease press the GREEN button to accept or the RED to deny", windowWidth*.35, windowHeight*.4, windowWidth*.30, windowHeight*.3);
    } else if (showTerms == true && acceptors == 8 && denied == false) {
        fill('rgba(20,30,60,100)');
        rect(windowWidth*.30, windowHeight*.25, windowWidth*.4, windowHeight*.5, 10, 10, 10, 10);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(32);
        textFont(lucida);
        text("Note to Self:", windowWidth*.5, windowHeight*.33);
        textSize(16);
        textAlign(LEFT);
        text("Do not play this game. I keep seeming to forget that I've discovered that through this Companion DesignCraft is brainwashing me. If I do not believe this message, look for the explanation I've left myself on the book shelf. This Companion will now terminate.", windowWidth*.35, windowHeight*.4, windowWidth*.30, windowHeight*.3);
        setTimeout(deniedHard, 10000);
        //Amelia's note
    } else if (showTerms == true && denied == true) {
        fill('rgba(20,30,60,100)');
        rect(windowWidth*.30, windowHeight*.25, windowWidth*.4, windowHeight*.5, 10, 10, 10, 10);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(32);
        textFont(lucida);
        text("Note to Self:", windowWidth*.5, windowHeight*.33);
        textSize(16);
        textAlign(LEFT);
        text("It appears you have not accepted the DesignCraft Terms of Service, and that we cannot reach our servers to file this issue. If this error continues, please report ref. 23094 to iamadatapoint.com.", windowWidth*.35, windowHeight*.4, windowWidth*.30, windowHeight*.3);
    }
}

function termsTime() {
    showTerms = true;
}


function acceptOne() {
    console.log('accepted');
    acceptors++;
    listening = true;
}

function deniedHard() {
    console.log('denied');
    denied = true;
    setTimeout( function () { window.location = 'http://localhost:8000';} , 7000 );
}

function tryAgain() {
    termsTime();
}
