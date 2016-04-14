var showTerms = false;
var acceptors = 0;
var yessir = new RegExp("yes");
var nosir = new RegExp("no");
var myRec;
var listening = false;
var denied = false;

var accept_data = [
    {rights: "accept to have samples of your voiced used in their AI training data sets.",
    speak: "to have samples of my voiced used in AI training data sets,"},
    {rights: "accept to have your personal desires analyzed and sold to other businesses.",
    speak: "to have my personal desires analyzed and sold,"},
    {rights: "accept to have my retinas scanned and have my reading speed sold to other businesses.",
    speak: "to have my retinas scanned and reading speed sold,"}

];

function preload() {
    akashi = loadFont('font/Akashi.ttf');
    lucida = loadFont('font/Lucida Sans Regular/Lucida Sans Regular.ttf');
}

function setup() {
    myCanvas = createCanvas(windowWidth, windowHeight);
    myCanvas.parent('processing');
    background('rgba(0,0,0,0)');
    setTimeout(termsTime, 5000);

}

function draw() {
    background('rgba(0,0,0,0)');
    textAlign(CENTER);
    textSize(42);
    textFont(akashi);
    fill(255,255,255);
    text("Discover Your Inner Fantasy", windowWidth*.5, windowHeight*.1);
    if (showTerms == true && acceptors < 10) {
        fill('rgba(20,30,60,100)');
        rect(windowWidth*.20, windowHeight*.25, windowWidth*.6, windowHeight*.5, 10, 10, 10, 10);
        fill(255, 255, 255);
        textAlign(CENTER);
        textSize(32);
        textFont(lucida);
        text("Terms of Service:", windowWidth*.5, windowHeight*.33);
        textSize(24);
        textAlign(LEFT);
        text("To play this game, DesignCraft asks that you " + accept_data[acceptors].rights + "\n\nSay 'Yes, I agree " +  accept_data[acceptors].speak + "' or 'No I do not' to deny.", windowWidth*.25, windowHeight*.4, windowWidth*.5, windowHeight*.3);
    } else if (showTerms == true && acceptors == 10) {
        //Amelia's note
    } else if (showTerms == true && denied == true) {
        //Denied and leave game
    }
}

function termsTime() {
    showTerms = true;
}

function errorLog() {
    console.log('error, restarting');
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
