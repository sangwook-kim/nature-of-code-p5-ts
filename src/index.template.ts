import P5 from 'p5';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent('p5app');
    };

    p5.draw = () => {};

    p5.mousePressed = () => {
        if (p5.isLooping()) {
            p5.noLoop();
        } else {
            p5.loop();
        }
    };
};

new P5(sketch);
