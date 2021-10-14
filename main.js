prediction = "";



Webcam.set({
    width : 350,
    height : 300,
    image_format : 'png',
    png_qulity : 90
});

camera = document.getElementById("camera");


Webcam.attach('#camera');


function take_snapshot()
{
    Webcam.snap(function(data_uri)
    {
        document.getElementById("result").innerHTML = '<img id ="capture_image" src ="'+data_uri+'"/>';
    });
}

console.log('ml5 version : ', ml5.version);


classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/uOQ3gbWX8/model.json", modelLoaded); 

function modelLoaded()
{
    console.log('Model ready');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utterThis);
}