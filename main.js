canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
car_heigth = 90;
car_width = 100;
car_x = 10;
car_y = 10;
background_image = "istockphoto-1146551901-612x612";
car_image = "car1.png";
car_image = "imagees.jpg";

function add() {
    background_imgTag = new Image(); //defining a variable with a new image
     background_imgTag.onload = uploadBackground; // setting a function, onloading this variable
      background_imgTag.src = background_image; // load image 
      car_imgTag = new Image(); //defining a variable with a new image 
      car_imgTag.onload = uploadrover; // setting a function, onloading this variable 
      car_imgTag.src = rover_image; // load image 
    }

    function uploadBackground() {
        ctx.drawImage(background_imgTag, 0, 0, canvas.width, canvas.heigth);
    }

    function uploadrover() {
        ctx.drawImage(car_imgTag, rover_x, rover_y, car_width, car_heigth);
    }

    window.addEventListener('keydown', my_keydown);

    function my_keydown(e) {
        keypressesed = e.keyCode;
        console.log(keypressesed);
        if (keypressesed == "38") {
            up();
            console.log("up");
        }
        if (keypressesed == "37") {
            left();
            console.log("left");
        }
        if (keypressesed == "39") {
            right();
            console.log("right");
        }
        if (keypressesed == "40") {
            down();
            console.log("down");
        }
    }

    function up() {
        if (caer_y >= 0) {
            car_y = car_y - 10;
            console.log("when up arrow pressed x = " + car_x + "y = " + car_y);
            uploadBackground();
            uploadcar();
        }

    }

    function down() {
        if (car_y <= 500) {
            car_y = rover_y + 10;
            console.log("when down arrow pressed x = " + car_x + "y = " + car_y);
            uploadBackground();
            uploadcar();
        }

    }

    function left() {
        if (car_x >= 0) {
            rover_x = rover_x - 10;
            console.log("when left arrow pressed x = " + rover_x + "y = " + rover_y);
            uploadBackground();
            uploadcar();
        }

    }

    function right() {
        if (rover_x <= 700) {
            rover_x = rover_x + 10;
            console.log("when right arrow pressed x = " + car_x + "y = " + car_y);
            uploadBackground();
            uploadcar();
        }

    }