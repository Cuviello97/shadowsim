/*Shadow Simulation
By Anthony Cuviello */

/*TODO
-Work on building drawer
-Make the scale variable for animation (buildings are in meters)
-start making animation scalable
*/

//vars & constants
//=================================================================
const canvasSize = 400;
const skyColor = "#80e5ff";
const grassColor = "#33cc33";

var canvas;
var ctx;

var sun = new Image();
sun.src = 'sun.png';

var buildingMode = true;
var buildingTime = true; //true for 2pm false for 6pm
var buildingChoice;

//Buildings
var gym = Building(20, 10, 40);
var bank = Building(25, 12.5, 50);
var restaurant = Building(27, 13.5, 54);
var hospital = Building(34, 17, 68);
var apartment = Building(40, 20, 80);

//Functions
//=================================================================
function init() {
    canvas = document.getElementById("canvas");
    canvas.width = canvasSize;
    canvas.height = canvasSize;
    ctx = canvas.getContext("2d");
    buildingModeHTML();
    //Animation loop
    var id = setInterval(frame, 100);
    function frame() {
        background();
        //Check to see if building or flagpole mode
        if (buildingMode) {
            buildingChoice = document.getElementById("buildingChoice").options.selectedIndex;
            //Check to see if 2pm or 6pm is checked
            if (document.getElementById("2pm").checked) {
                drawSun(50, 100);
                
            }
            else {
                drawSun(250, 100);
            }
        }
        else {
            
        }
    }
}


//Constructor for buildings with values at 2pm and 6pm, unit is meters 
function Building(height, shadow1, shadow2) {
    this.h = height;
    this.s1 = shadow1;
    this.s2 = shadow2;
}

function buildingDrawer() {
    switch(buildingChoice) {
        case 1:
            break;
        case 2:
            break;
        case 3:
            break;
        case 4:
            break;
        case 5:
            break;
    }
}

function background() {
    ctx.fillStyle = skyColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = grassColor;
    ctx.fillRect(0, canvasSize, canvas.width, -(canvas.height/5));
}

function drawSun(x, y) {
    ctx.drawImage(sun, x, y, 75, 75);
}

function buildingModeHTML() {
    buildingMode = true;
    document.getElementById("building").style.display = "block";
    document.getElementById("flagpole").style.display = "none";
    background();
}

function flagpoleModeHTML() {
    buildingMode = false;
    document.getElementById("building").style.display = "none";
    document.getElementById("flagpole").style.display = "block";
    background();
}