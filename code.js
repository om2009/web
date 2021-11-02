function setup()
{
    canvas = createCanvas(280, 280);
    canvas.center();
    background('white');
};

function updateCanvas()
{
    background('white');
}


time_counter = 0;
timer_check = "";
score = 0;


function draw()
{
    if(timer_check ==""){
     counter();
    }
    if(timer_check == "stop")
    {
        console.log("timer stop");
    }
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