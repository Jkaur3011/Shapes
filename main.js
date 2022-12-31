x = 0;
y = 0;
x1 = 0;
y1 = 0;
x2 = 0;
y2 = 0;
x3 = 0;
y3 = 0;
draw_circle = "";
draw_rect = "";
draw_triangle = "";

function setup() {
    canvas = createCanvas(1000, 600);
    canvas.position(250, 100);
}

var SR = window.webkitSpeechRecognition;

var record = new SR;

function start_draw(){
    document.getElementById("status").innerHTML = "System is listening, Please Speak."
    record.start();
}

record.onresult = function(event){
    console.log(event);
    
    var content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "The system has recognised your speech as "+content;

    if(content == "circle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*500);
        draw_circle = "set";
        document.getElementById("status").innerHTML = "Your circle is being drawn."
    }
    if(content == "rectangle"){
        x = Math.floor(Math.random()*900);
        y = Math.floor(Math.random()*500);
        draw_rect = "set";
        document.getElementById("status").innerHTML = "Your rectangle is being drawn."
    }
    if(content == "Triangle"){
        x1 = Math.floor(Math.random()*900);
        y1 = Math.floor(Math.random()*500);
        x2 = Math.floor(Math.random()*900);
        y2 = Math.floor(Math.random()*500);
        x3 = Math.floor(Math.random()*900);
        y3 = Math.floor(Math.random()*500);
        draw_triangle = "set";
        document.getElementById("status").innerHTML = "Your triangle is being drawn."
    }
}

function draw(){
    if(draw_circle == "set"){
        radius = Math.floor(Math.random()*100);
        circle(x, y, radius);
        document.getElementById("status").innerHTML = "Circle is drawn.";
        draw_circle = "";
    }
    if(draw_rect == "set"){
        w = Math.floor(Math.random()*300);
        h = Math.floor(Math.random()*100);
        rect(x, y, w, h);
        document.getElementById("status").innerHTML = "Rectangle is drawn.";
        draw_rect = "";
    }
    if(draw_triangle == "set"){
        triangle(x1, y1, x2, y2, x3, y3)
        document.getElementById("status").innerHTML = "Triangle is drawn.";
        draw_triangle = "";
    }

}