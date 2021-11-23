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
    background(" #9494b8");
}


function modelLoaded()
{
    console.log("posenet is ready");
}



function gotPose(result)
{
    if(result.length > 0)
    {
        console.log(result);
    }
}