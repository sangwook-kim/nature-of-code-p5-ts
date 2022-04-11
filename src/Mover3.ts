import P5 from 'p5';

const createMover = ({
    p5,
    width,
    height,
    initPosition = p5.createVector(width / 2, height / 2),
    initVelocity = p5.createVector(0, 0),
    initAccelation = p5.createVector(0, 0),
    topspeed,
}: {
    p5: P5;
    width: number;
    height: number;
    initPosition?: P5.Vector;
    initVelocity?: P5.Vector;
    initAccelation?: P5.Vector;
    topspeed?: number;
}) => {
    const location = initPosition;
    const velocity = initVelocity;
    const accelation = initAccelation;

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
        if (topspeed != undefined && velocity.mag() > topspeed) {
            velocity.setMag(topspeed);
        }
        checkEdges();
    };

    const display = () => {
        p5.stroke(0);
        p5.fill(175);

        p5.ellipse(location.x, location.y, 16, 16);
    };

    const updateAccelation = (acc: P5.Vector) => {
        accelation.x = acc.x;
        accelation.y = acc.y;
    };

    return {update, display, updateAccelation};
};

export default createMover;
