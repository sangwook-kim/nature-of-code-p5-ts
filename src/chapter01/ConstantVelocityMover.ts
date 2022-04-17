import P5 from 'p5';
import Mover from './FunctionalMover';

const ConstantVMover = (p5: P5, {width, height}) => {
    const movers = Mover(p5);
    const cMovers = [];

    const create = () => {
        const initialValue = {
            location: p5.createVector(p5.random(0, width), p5.random(0, height)),
            velocity: p5.createVector(p5.random(-2, 2), p5.random(-2, 2)),
        };
        cMovers.push(movers.useState(initialValue));
    };

    const handleEdges = (location: P5.Vector) => {
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
        cMovers.forEach((cMover) => {
            const [moverState, setMoverState] = cMover;
            const {location, velocity} = moverState;
            const newLocation = location.add(velocity);
            handleEdges(newLocation);

            setMoverState({
                location: newLocation,
                velocity,
            });
        });

        movers.display();
    };

    return {create, update};
};

export default ConstantVMover;
