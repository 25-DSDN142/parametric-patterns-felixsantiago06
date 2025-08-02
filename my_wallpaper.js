//the parameter variables
let rect_width  = 20;
let rect_height = 30;
let spacing = 10;
let count = 5;
let stroke_weight = 2;
let fill_alpha = 200;
let row_count = 5;
let fill_r = 200;
let fill_g = 0;
let fill_b = 0;



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
    for (let j = 0; j < row_count; j++) {
      let x = 40 + i * (rect_width + spacing);
      let y = 40 + j * (rect_height + spacing);

      if (stroke_weight) {
        stroke(0);
        strokeWeight(stroke_weight);
      } else {
        noStroke();
      }
      fill(0, fill_alpha); // black color
      fill(fill_r, fill_g, fill_b, fill_alpha); 
      rect(x, y, rect_width, rect_height);
    }
  }
  pop();
}
