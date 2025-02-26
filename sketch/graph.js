class Graph {
    constructor(data_array) {
        try {
            this.data_array = data_array;
        }
        catch (err) {
            let error_msg = "Error: " + err;
            console.log(error_msg);
            this.data_array = [1];
        }

        this.data_length = this.data_array.length;

        let scaleFactor = 16;
        this.width = (width/scaleFactor) * (scaleFactor - 2);
        this.height = (height/scaleFactor) * (scaleFactor - 2);
        let x = width/scaleFactor;
        let y = this.height + height/scaleFactor;
        this.origin = createVector(x, y);
    }

    plot() {
        for (let i = 0; i < this.data_length; i++) {
            // return 0;
        }
        this.draw_graph();
    }

    draw_graph() {
        stroke(0);
        strokeWeight(1);
        noFill();
        // X axis
        line(this.origin.x, this.origin.y, this.origin.x + this.width, this.origin.y);
        // Y axis
        line(this.origin.x, this.origin.y, this.origin.x, this.origin.y - this.height);
    }
}