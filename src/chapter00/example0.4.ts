import P5 from 'p5';

const sketch = (p5: P5) => {
    const width = 640;
    const height = 360;
    let count = 0;
    let maxCount = 1000;

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);

        canvas.parent('p5app');
    };

    p5.draw = () => {
        const x = p5.randomGaussian(width / 2, 60);

        p5.noStroke();
        p5.fill(100, 100, 100, 10);
        p5.ellipse(x, height / 2, 16, 16);

        count++ > maxCount && p5.noLoop();
    };
};

new P5(sketch);
