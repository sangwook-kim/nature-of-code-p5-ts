import P5 from 'p5';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent('p5app');

        window.onblur = () => {
            p5.noLoop();
        };

        window.onfocus = () => {
            p5.loop();
        };
    };

    // p5.draw = () => {};
};

new P5(sketch);
