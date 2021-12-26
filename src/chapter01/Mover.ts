import P5 from 'p5';

const createMover = ({p5, width, height}: {p5: P5; width: number; height: number}) => {
    const location = p5.createVector(p5.random(0, width), p5.random(0, height));
    const velocity = p5.createVector(p5.random(-2, 2), p5.random(-2, 2));

    const checkEdges = () => {
        if (location.x > width) {
            location.x = 0;
        } else if (location.x < 0) {
            location.x = width;
        }

        if (location.y > height) {
            location.y = 0;
        } else if (location.y < 0) {
            location.y = height;
        }
    };

    const update = () => {
        location.add(velocity);
        checkEdges();
    };

    const display = () => {
        p5.stroke(0);
        p5.fill(175);

        p5.ellipse(location.x, location.y, 16, 16);
    };

    return {update, display};
};

export default createMover;
