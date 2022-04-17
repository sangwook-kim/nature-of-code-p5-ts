import P5 from 'p5';
import Movers from './Movers';

const sketch = (p5: P5) => {
    const width = 1200;
    const height = 600;
    const movers = Movers(p5, {width, height});

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);
        canvas.parent('p5app');

        window.onblur = () => {
            p5.noLoop();
        };

        window.onfocus = () => {
            p5.loop();
        };

        const updateFN = (location: P5.Vector, velocity: P5.Vector) => {
            const mouseVector = p5.createVector(p5.mouseX, p5.mouseY);
            const accelation = P5.Vector.sub(mouseVector, location);

            const mag = 300 / (accelation.mag() + 10);
            accelation.normalize();
            accelation.mult(mag);

            const newVelocity = P5.Vector.add(velocity, accelation);

            const newLocation = location.add(newVelocity);

            return {
                location: newLocation,
                velocity: newVelocity,
            };
        };

        movers.create({
            location: p5.createVector(p5.random(0, width), p5.random(0, height)),
            velocity: p5.createVector(0, 0),
            updateFN,
        });
    };

    p5.draw = () => {
        p5.background(255, 16);

        movers.update();
    };
};

new P5(sketch, document.getElementById('p5app'));
