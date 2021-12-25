import P5 from 'p5';
import PerlinWalker from './PerlinWalker';

const sketch = (p5: P5) => {
    const width = 640;
    const height = 360;
    const walker = PerlinWalker({p5, width, height});

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);

        canvas.parent('p5app');
    };

    p5.draw = () => {
        const {x, y} = walker.step();

        p5.ellipse(x, y, 16, 16);
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
