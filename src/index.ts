import P5 from 'p5';
import NoiseMover from './NoiseAccelerationMover';

const sketch = (p5: P5) => {
    const width = 200;
    const height = 200;
    const movers = NoiseMover(p5, {width, height});

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent('p5app');

        window.onblur = () => {
            p5.noLoop();
        };

        window.onfocus = () => {
            p5.loop();
        };

        movers.create();
        movers.create();
    };

    p5.draw = () => {
        p5.background(255, 16);

        movers.update();
    };
};

new P5(sketch, document.getElementById('p5app'));
