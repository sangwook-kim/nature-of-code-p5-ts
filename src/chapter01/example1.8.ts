import P5 from 'p5';
import createMover from './Mover2';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;
    const Movers = [];

    p5.setup = () => {
        p5.createCanvas(width, height);
        const initX = width / 2;
        const initY = height / 2;
        const initVX = 0;
        const initVY = 0;
        const initAX = -0.001;
        const initAY = 0.01;
        const topspeed = 10;

        Movers.push(
            createMover({
                p5,
                width,
                height,
                initX,
                initY,
                initVX,
                initVY,
                initAX,
                initAY,
                topspeed,
            }),
        );
    };

    p5.draw = () => {
        p5.background(255);

        if (p5.keyIsPressed) {
            console.log('key');
        }

        for (let i = 0; i < Movers.length; i++) {
            Movers[i].update();
            Movers[i].display();
        }
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
