import P5 from 'p5';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;
    const l = 20;
    const randomCounts = new Array(l).fill(0);
    p5.setup = () => {
        p5.createCanvas(width, height);
    };

    p5.draw = () => {
        p5.background('#fff');

        const index = Math.floor(p5.random(l));
        if (randomCounts[index]++ >= height / 2) {
            p5.noLoop();
        }

        const barWidth = width / l;

        p5.stroke(0);
        p5.fill(175);

        randomCounts.forEach((v, i) => {
            p5.rect(i * barWidth, height - v, barWidth, v);
        });
    };
};

new P5(sketch, document.getElementById('p5app'));
