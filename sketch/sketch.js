let data_array = [1, 2, 3, 4, 5];
let graph;

function setup() {
  createCanvas(800, 450);
  graph = new Graph(data_array);
  background(220);
  graph.plot();

}

function draw() {
  // background(220);
  // graph.plot();
}
