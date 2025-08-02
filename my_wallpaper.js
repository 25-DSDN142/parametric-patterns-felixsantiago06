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
  // Calculate total width and height of the block of rectangles
  let total_width = count * rect_width + (count - 1) * spacing;
  let total_height = row_count * rect_height + (row_count - 1) * spacing;
  // Center the block in the 200x200 grid cell
  let start_x = (200 - total_width) / 2;
  let start_y = (200 - total_height) / 2;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < row_count; j++) {
      let x = start_x + i * (rect_width + spacing);
      let y = start_y + j * (rect_height + spacing);

      if (stroke_weight) {
        stroke(0);
        strokeWeight(stroke_weight);
      } else {
        noStroke();
      }
      fill(fill_r, fill_g, fill_b, fill_alpha); 
      rect(x, y, rect_width, rect_height);
    }
  }
  pop();
}
