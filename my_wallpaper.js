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
let spacingSlider, countSlider, rowCountSlider;
let strokeWeightLabel, fillAlphaLabel, rectWidthLabel;
let spacingLabel, countLabel, rowCountLabel;
let colorInput;


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
  strokeWeightLabel = createDiv('Stroke Weight');
  strokeWeightLabel.position(10, 200);
  strokeWeightSlider = createSlider(0, 5, stroke_weight, 1);
  strokeWeightSlider.position(10, 220);
  strokeWeightSlider.style('width', '180px');
  strokeWeightSlider.input(redraw);

  fillAlphaLabel = createDiv('Fill Opacity');
  fillAlphaLabel.position(10, 250);
  fillAlphaSlider = createSlider(0, 255, fill_alpha, 1);
  fillAlphaSlider.position(10, 270);
  fillAlphaSlider.style('width', '180px');
  fillAlphaSlider.input(redraw);

  rectWidthLabel = createDiv('Rectangle Width');
  rectWidthLabel.position(10, 300);
  rectWidthSlider = createSlider(1, 100, rect_width, 1);
  rectWidthSlider.position(10, 320);
  rectWidthSlider.style('width', '180px');
  rectWidthSlider.input(redraw);

    spacingLabel = createDiv('Spacing');
  spacingLabel.position(10, 350);
  spacingSlider = createSlider(0, 50, spacing, 1);
  spacingSlider.position(10, 370);
  spacingSlider.style('width', '180px');
  spacingSlider.input(redraw);

  countLabel = createDiv('Column Count');
  countLabel.position(10, 400);
  countSlider = createSlider(1, 10, count, 1);
  countSlider.position(10, 420);
  countSlider.style('width', '180px');
  countSlider.input(redraw);

  rowCountLabel = createDiv('Row Count');
  rowCountLabel.position(10, 450);
  rowCountSlider = createSlider(1, 10, row_count, 1);
  rowCountSlider.position(10, 470);
  rowCountSlider.style('width', '180px');
  rowCountSlider.input(redraw);

  colorInput = createColorPicker('#000000');
  colorInput.position(10, 500);
  colorInput.input(redraw);

  noLoop();
}

function wallpaper_background() {
  background(240, 255, 240); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  // Use slider values for interactivity (all controls)
  let sw = strokeWeightSlider.value();
  let fa = fillAlphaSlider.value();
  let rw = rectWidthSlider.value();
  let sp = spacingSlider.value();
  let cols = countSlider.value();
  let rows = rowCountSlider.value();
  let col = colorInput.color();

  push();
  // Calculate total width and height of the block of rectangles
  let total_width = cols * rw + (cols - 1) * sp;
  let total_height = rows * rect_height + (rows - 1) * sp;
  // Center the block in the 200x200 grid cell
  let start_x = (200 - total_width) / 2;
  let start_y = (200 - total_height) / 2;
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = start_x + i * (rw + sp);
      let y = start_y + j * (rect_height + sp);

      if (sw) {
        stroke(0);
        strokeWeight(sw);
      } else {
        noStroke();
      }
      fill(col.levels[0], col.levels[1], col.levels[2], fa); 
      rect(x, y, rw, rect_height);
    }
  }
  pop();
}
