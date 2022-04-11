import P5 from 'p5';
import createMover from './Mover3';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;
    const topspeed = 10;
    const Mover = createMover({p5, width, height, topspeed});
    const normalAcc = p5.createVector(-0.001, 0.1);
    const slowAcc = p5.createVector(0.001, -0.1);

    p5.setup = () => {
        p5.createCanvas(width, height);
    };

    p5.draw = () => {
        p5.background(255);

        if (p5.keyIsPressed) {
            console.log('key');
            Mover.updateAccelation(slowAcc);
        } else {
            Mover.updateAccelation(normalAcc);
        }

        Mover.update();
        Mover.display();
    };

    p5.mousePressed = () => {
        if (p5.isLooping()) {
            p5.noLoop();
        } else {
            p5.loop();
        }
    };
};

new P5(sketch, document.getElementById('p5app'));
