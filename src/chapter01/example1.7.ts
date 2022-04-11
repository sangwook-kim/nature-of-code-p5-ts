import P5 from 'p5';
import createMover from './Mover';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;
    const Movers = [];

    p5.setup = () => {
        p5.createCanvas(width, height);

        Movers.push(createMover({p5, width, height}));
        Movers.push(createMover({p5, width, height}));
    };

    p5.draw = () => {
        p5.background(255);

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
