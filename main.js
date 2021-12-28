status_lable = "";
object = [];
percent = "";
object_name = document.getElementById("object_name").value;
function preload()
{
   
}

function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();

}
function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = " status : detecting object";
    object_name = document.getElementById("object_name").value;
   
}

function modelLoaded()
{
    console.log("model is ready");
    status_lable = true;
    objectDetector.detect(video, gotResult);
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
    image(video,0,0,380, 380);
    if(status_lable != "")
    {
        objectDetector.detect(video, gotResult);
        
        for(i=0; i<object.length; i++)
        {
            document.getElementById("status").innerHTML = "Status : detecting object";
            fill('red');
            percent = floor(object[i].confidence*100);
            if(object[i].label == object_name)
            {
                document.getElementById("object_about").innerHTML = object_name + " Found"
                var synth = window.speechSynthesis;
                speak_data = object_name + " Found";
                var utterThis = new SpeechSynthesisUtterance(speak_data);
                synth.speak(utterThis);
            }else{
                document.getElementById("object_about").innerHTML = object_name + " not Found";
            }
            text(object[i].label+" "+percent+"%", object[i].x+15, object[i].y+15);
            noFill();
            stroke('red');
            rect(object[i].x,object[i].y,object[i].width,object[i].height);
            
        }
    }
    
}