import P5 from 'p5';
import ConstantVMover from './ConstantVelocityMover';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;
    const movers = ConstantVMover(p5, {width, height});

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent('p5app');

        movers.create();
        movers.create();
    };

    p5.draw = () => {
        p5.background(255, 16);

        movers.update();
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
