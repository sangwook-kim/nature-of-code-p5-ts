import P5 from 'p5';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;

    let location = p5.createVector(100, 100);
    let velocity = p5.createVector(2.5, 5);

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);

        canvas.parent('p5app');
    };

    p5.draw = () => {
        p5.background(255);

        location.add(velocity);

        if (location.x > width || location.x < 0) {
            velocity.x *= -1;
        }
        if (location.y > height || location.y < 0) {
            velocity.y *= -1;
        }

        p5.stroke(0);
        p5.fill(175);
        p5.ellipse(location.x, location.y, 16, 16);
    };

    p5.mousePressed = () => {
        if (p5.isLooping()) {
            p5.noLoop();
        } else {
            p5.loop();
        }
    };
};

new P5(sketch);
