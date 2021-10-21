function preload()
{
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();

    frame_color = "gray"
}



function draw()
{
    image(video, 70, 50, 350, 300);

    let c;
    noStroke();
    c = color(frame_color);
    fill(c);
    rect(30, 10, 435, 35); 

    c = color(frame_color);
    fill(c);
    rect(30, 40, 35, 350); 

    c = color(frame_color);
    fill(c);
    rect(430, 40, 35, 350);

    c = color(frame_color);
    fill(c);
    rect(30, 355, 435, 35);
}


function take_snapshot()
{
    save('filter image.png');
}


function framecolor()
{
    frame_color = document.getElementById("color_name").value;
}