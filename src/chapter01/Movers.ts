import P5 from 'p5';

type TMoverUpdateFN = (
    location: P5.Vector,
    velocity: P5.Vector,
    rSeed?: P5.Vector,
) => {location: P5.Vector; velocity: P5.Vector; rSeed?: P5.Vector};

export type TMoverState = {
    location: P5.Vector;
    velocity: P5.Vector;
    rSeed?: P5.Vector;
    updateFN: TMoverUpdateFN;
};

const useState = (initialValue: TMoverState) => {
    const cMover = {
        value: initialValue,
        setState(newValue: TMoverState) {
            cMover.value = newValue;
        },
    };

    return [cMover.value, cMover.setState];
};

const Movers = (p5: P5, {width, height}) => {
    const movers = [];

    const create = (initialValue: TMoverState) => {
        movers.push(useState(initialValue));
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
        movers.forEach((mover) => {
            const [moverState, setMoverState] = mover;
            const {location, velocity, rSeed, updateFN} = moverState;

            p5.stroke(0);
            p5.fill(175);
            p5.ellipse(location.x, location.y, 16, 16);

            handleEdges(location);
            const newValue = updateFN(location, velocity, rSeed);

            setMoverState({
                ...newValue,
                updateFN,
            });
        });
    };

    return {create, update};
};

export default Movers;
