let data_array = [];
let graph;

let sliderY;
let sliderX;

function setup() {
  createCanvas(800, 450);
  for (let i = 0; i < 100; i++) {
    let value = random(0, 34);
    data_array.push(value);
  }
  graph = new Graph(data_array);
  background(220);
  graph.plot();

  sliderX = createSlider(0, width, width - 100);
  sliderX.position((windowWidth / 2) - (width / 2), 20);
  sliderY = createSlider(0, height, height - 100);
  sliderY.position(20, 50);

}

function draw() {
  background(220);
  graph.plot();
  graph.graphSize(sliderX.value(), sliderY.value());
  console.log(sliderX.value(), sliderY.value());
}
