img = "";
status_lable = "";
object = [];
percent = "";

function preload()
{
    img = loadImage("ac.jpg");
}

function setup()
{
    canvas = createCanvas(450, 550);
    canvas.center();
    objectDetector = ml5.objectDetector('cococssd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : detecting object";

}

function modelLoaded()
{
    console.log("model is ready");
    status_lable = true;
    objectDetector.detect(img, gotResult);
}


function gotResult(error, result)
{
    if(error)
    {
        console.error(error);

    }else{
        console.log(result);
        object = result;

    }
}

function draw()
{
    image(img,0,0,450, 550);
    if(status_lable != "")
    {
        for(i=0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : Object detected";
            fill("red");
            percent = floor(object[i].confidence*100);
            text(object[i].label+" "+percent+"%", object[i].x+15, object[i].y+15);
            noFill();
            stroke("red");
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
        }
    }
    
}

function back()
{
    window.open("index.html");
}