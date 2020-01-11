let img; // Declare variable 'img'.

function setup() {
  let sticker_canvas = createCanvas(windowWidth*0.985, 345);
  sticker_canvas.position(0,0);
  sticker = loadImage('Images/stickers/coahomaclear.png'); // Load the image
}

function draw() {
  //Drawing the stickers randomly across the heading section
  let x = floor(random(windowWidth));
  let y = floor(random(windowHeight));
  rotate(random(0,6.25));
  tint(255, 170); //this is the opacity of the stickers
  image(sticker, x, y, sticker.width/2, sticker.height/2);

	//imageDrawing(mouseX, mouseY, pmouseX, pmouseY);
}