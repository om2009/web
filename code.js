function preload()
{
    classifier = ml5.imageClassifier('DoodleNet');
}



data = ['airplane',
'alarm clock',
'apple',
'axe',
'backpack',
'banana',
'bat',
'basket',
'basketball',
'bathtub',
'bed',
'bee',
'belt',
'bench',
'bicycle',
'bird',
'birthday cake',
'blackberry',
'book',
'bottlecap',
'bread',
'bridge',
'bucket',
'bus',
'bush',
'butterfly',
'cake',
'calculator',
'calendar',
'camel',
'camera',
'campfire',
'candle',
'car',
'carrot',
'cat',
'fan',
'cell phone',
'chair',
'chandelier',
'church',
'circle',
'clarinet',
'clock',
'cloud',
'coffee cup',
'compass'];

random = Math.floor(Math.random() * 46);
random_data = data[random];
document.getElementById("draw").innerHTML = "You have to draw : " + random_data;

function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    canvas.mouseReleased(classifyCanvas);
    synth = window.speechSynthesis;
    background('white');
};

function updateCanvas()
{
    background('white');
}


time_counter = 0;
timer_check = "";
score = '';
check_score = "no";
function draw()
{
    strokeWeight(13);
    stroke(0);

    if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if(timer_check ==""){
     counter();
    }
    if(timer_check == "stop")
    {
        console.log("timer stop");
        check_score = "yes";
        //gotResult();
    }
}

function classifyCanvas()
{
    classifier.classify(canvas, gotResult);
}

function gotResult(error, result)
{
    if(error){
        console.error(error);
    }

    document.getElementById("label").innerHTML = result[0].label;
    document.getElementById("confidence").innerHTML = Math.round(result[0].confidence *100) + "%";
    if(check_score == 'yes'){
        if(result[0].label == random_data)
        {
            score = "Score : you won 🥳";
            document.getElementById("score").innerHTML = score;
            utterthis = new SpeechSynthesisUtterance('you won');
            synth.speak(utterthis);
        }else{
            score = "Score : you lose 😞";
            document.getElementById("score").innerHTML = score;
            utterthis = new SpeechSynthesisUtterance('you lose');
            synth.speak(utterthis);
        }
    }

    utterthis = new SpeechSynthesisUtterance(result[0].label);

    synth.speak(utterthis);
}

function counter()
{
    time_counter++;
    document.getElementById("time").innerHTML = "Timer : " + time_counter;
    if (time_counter > 400){
        time_counter = 0;
        updateCanvas();
        timer_check = "stop";
    }
}

