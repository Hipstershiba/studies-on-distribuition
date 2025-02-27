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
        this.width = (width / scaleFactor) * (scaleFactor - 2);
        this.height = (height / scaleFactor) * (scaleFactor - 2);
        let x = width / scaleFactor;
        let y = this.height + height / scaleFactor;
        this.origin = createVector(x, y);

        this.resolution = this.width / (this.data_length - 1);
    }

    plot() {
        for (let i = 0; i < this.data_length; i++) {
            // return 0;
        }
        this.draw_graph();
    }

    draw_graph() {
        stroke(0);
        strokeWeight(2);
        noFill();
        // X axis
        line(this.origin.x, this.origin.y, this.origin.x + this.width, this.origin.y);
        for (let i = 0; i < this.data_length; i++) {
            let x = this.origin.x + (i * this.resolution);
            push();
            stroke(0);
            strokeWeight(1);
            line(x, this.origin.y, x, this.origin.y - 5);
            noStroke();
            fill(0);
            textAlign(CENTER);
            text(i, x, this.origin.y + 15);
            pop();
        }
        // Y axis
        line(this.origin.x, this.origin.y, this.origin.x, this.origin.y - this.height);
        for (let i = 0; i <= 10; i++) {
            let y_resolution = this.height / 10;
            let y = this.origin.y - (i * y_resolution);
            push();
            stroke(0);
            strokeWeight(1);
            line(this.origin.x, y, this.origin.x + 5, y);
            noStroke();
            fill(0);
            textAlign(RIGHT);
            if (i > 0) {
                y += 5;
            }
            text(i / 10, this.origin.x - 8, y);
            pop();
        }
    }
}