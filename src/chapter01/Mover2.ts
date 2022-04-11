import P5 from 'p5';

const createMover = ({
    p5,
    width,
    height,
    initX,
    initY,
    initVX,
    initVY,
    initAX,
    initAY,
    topspeed,
}: {
    p5: P5;
    width: number;
    height: number;
    initX: number;
    initY: number;
    initVX: number;
    initVY: number;
    initAX: number;
    initAY: number;
    topspeed: number;
}) => {
    const {createVector} = p5;

    const location = createVector(initX, initY);
    const velocity = createVector(initVX, initVY);
    const accelation = createVector(initAX, initAY);

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
        velocity.add(accelation);
        velocity.limit(topspeed);
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
