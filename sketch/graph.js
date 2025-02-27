class Graph {
    constructor(data_array) {
        try {
            this.data_array = data_array;
        }
        catch (err) {
            this.data_array = [1];
        }

        // Default dimensions and positioning
        let margin = 50;
        let x = margin;
        let y = height - margin;
        this.origin = createVector(x, y);
        this.width = width - margin;
        this.height = margin;
        this.size = createVector(this.width - this.origin.x, this.origin.y - this.height);

        this.data_length = this.data_array.length;
        this.min_value = min(this.data_array);
        this.max_value = max(this.data_array);

        this.resolution = 100;

        this.normalized_data_values = this.normalize_data_values();
        this.mapped_data_array = this.create_mapped_data_array(this.normalized_data_values);
    }

    set_origin(x, y) {
        this.origin.set(x, y);
    }

    graphSize(width, height) {
        this.size.set(width, height);
        this.width = this.origin.x + this.size.x;
        this.height = this.origin.y - this.size.y;
    }

    normalize_data_values() {
        let normalized_value = this.data_array.map((value) => {
            return map(value, this.min_value, this.max_value, 0, 1);
        });
        return normalized_value;
    }

    map_data_point_to_graph(value, index) {
        let x = this.origin.x + (index * this.resolution);
        let y = map(value, 0, 1, this.origin.y, this.origin.y - this.height);
        let mapped_data_point = createVector(x, y);
        return mapped_data_point;
    }

    create_mapped_data_array(values) {
        let mapped_data_array = [];
        for (let i = 0; i < this.data_length; i++) {
            let mapped_data_point = this.map_data_point_to_graph(values[i], i);
            mapped_data_array.push(mapped_data_point);
        }
        return mapped_data_array;
    }

    plot() {
        // let current_point = this.mapped_data_array[0];
        // for (let i = 1; i < this.data_length; i++) {
        //     let previous_point = current_point;
        //     current_point = this.mapped_data_array[i];
        //     stroke(0);
        //     strokeWeight(2);
        //     line(previous_point.x, previous_point.y, current_point.x, current_point.y);
        //     fill(0);
        //     noStroke();
        //     ellipse(current_point.x, current_point.y, 8, 8);
        // }
        this.draw_axis();
    }

    draw_axis() {
        stroke(0);
        strokeWeight(2);
        noFill();
        // X axis
        line(this.origin.x, this.origin.y, this.width, this.origin.y);
        for (let i = 0; i <= 10; i++) {
            let x = this.origin.x + (i * (this.size.x / 10));
            push();
            stroke(0);
            strokeWeight(1);
            line(x, this.origin.y, x, this.origin.y - 5);
            noStroke();
            fill(0);
            textAlign(CENTER);
            text(i / 10, x, this.origin.y + 15);
            pop();
        }
        // Y axis
        line(this.origin.x, this.origin.y, this.origin.x, this.height);
        for (let i = 0; i <= 10; i++) {
            let y_resolution = this.size.y / 10;
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