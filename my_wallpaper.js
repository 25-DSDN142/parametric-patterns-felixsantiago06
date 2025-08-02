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


// Sliders for interactivity (first half)
let strokeWeightSlider, fillAlphaSlider, rectWidthSlider;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;

  // Create sliders for interactivity (first half)
  strokeWeightSlider = createSlider(0, 20, stroke_weight, 1);
  strokeWeightSlider.position(10, 220);
  strokeWeightSlider.style('width', '180px');
  strokeWeightSlider.input(redraw);

  fillAlphaSlider = createSlider(0, 255, fill_alpha, 1);
  fillAlphaSlider.position(10, 250);
  fillAlphaSlider.style('width', '180px');
  fillAlphaSlider.input(redraw);

  rectWidthSlider = createSlider(1, 100, rect_width, 1);
  rectWidthSlider.position(10, 280);
  rectWidthSlider.style('width', '180px');
  rectWidthSlider.input(redraw);

  noLoop();
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Use slider values for interactivity (first half)
  let sw = strokeWeightSlider.value();
  let fa = fillAlphaSlider.value();
  let rw = rectWidthSlider.value();

  push();
  // Calculate total width and height of the block of rectangles
  let total_width = count * rw + (count - 1) * spacing;
  let total_height = row_count * rect_height + (row_count - 1) * spacing;
  // Center the block in the 200x200 grid cell
  let start_x = (200 - total_width) / 2;
  let start_y = (200 - total_height) / 2;
  for (let i = 0; i < count; i++) {
    for (let j = 0; j < row_count; j++) {
      let x = start_x + i * (rw + spacing);
      let y = start_y + j * (rect_height + spacing);

      if (sw) {
        stroke(0);
        strokeWeight(sw);
      } else {
        noStroke();
      }
      fill(fill_r, fill_g, fill_b, fa); 
      rect(x, y, rw, rect_height);
    }
  }
  pop();
}
