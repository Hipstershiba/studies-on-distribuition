let data_array = [];
let graph;

function setup() {
  createCanvas(800, 450);
  for (let i = 0; i < 100; i++) {
    let value = random(0, 34);
    data_array.push(value);
  }
  graph = new Graph(data_array);
  background(220);
  graph.plot();

}

function draw() {
  // background(220);
  // graph.plot();
}
