function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(50,150);

    canvas = createCanvas(500, 500)
    canvas.position(750,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPose);
}


function draw()
{
    user_name = document.getElementById("user_name").value;
    background(" #9494b8");
    textSize(difference);
    fill('white');
    text(user_name, 50,400)
}


function modelLoaded()
{
    console.log("posenet is ready");
}
left_wrist_x =0;
right_wrist_x = 0;
difference =0;
function gotPose(result)
{
    if(result.length > 0)
    {
        console.log(result);

       left_wrist_x = result[0].pose.leftWrist.x;
       right_wrist_x = result[0].pose.rightWrist.x;
       console.log("left wrist : " +left_wrist_x +"right wrist : " +right_wrist_x)
       difference = floor(left_wrist_x-right_wrist_x);
       console.log(difference + " difference");

    }
}
