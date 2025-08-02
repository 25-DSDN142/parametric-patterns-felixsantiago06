//the parameter variables
let rect_width  = 20;
let rect_height = 30;
let spacing = 10;
let count = 5;
let stroke_weight = 2;
let fill_alpha = 200;


function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  noStroke();
  push();
  for (let i = 0; i < count; i++) {
    let x = 40 + i * (rect_width + spacing);
    let y = 40;

    if (stroke_weight) {
      stroke(0);
      strokeWeight(stroke_weight);
    } else {
      noStroke();
    }
    fill(0, fill_alpha); // black color
    rect(x, y, rect_width, rect_height);
  }
  pop();
}
