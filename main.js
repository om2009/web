song_1 = "";
song_2 = "";
left_wrist_x = 0;

left_wrist_y = 0;

right_wrist_x = 0;

right_wrist_y = 0;
function preload()
{
    song_1 = loadSound("music.mp3");
    song_2 = loadSound("music2.mp3");
}
function setup()
{
    canvas = createCanvas(600, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log("model is ready");
}

function gotPoses(result)
{
    if(result.length > 0)
    {
    console.log(result);
    left_wrist_x = result[0].pose.leftWrist.x;
    left_wrist_y = result[0].pose.leftWrist.y;
    right_wrist_x = result[0].pose.rightWrist.x;
    right_wrist_y = result[0].pose.rightWrist.y;
    console.log("right wrist x :" +right_wrist_x+"right wrist y :" +right_wrist_y+"left wrist x :" +left_wrist_x+"left wrist y :" +left_wrist_y);

    }
}

function draw()
{
    image(video,0, 0, 600, 450);
}

function play()
{
    song_1.play();
}





