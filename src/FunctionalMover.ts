import P5 from 'p5';

export type TMoverState = {
    location: P5.Vector;
    velocity: P5.Vector;
};

const Mover = (p5: P5) => {
    const movers = [];
    // currentStateIndex: 0,
    const useState = (initialValue: TMoverState) => {
        const cMover = {
            value: initialValue,
            setState(newValue: TMoverState) {
                cMover.value = newValue;
            },
        };

        movers.push(cMover);

        return [cMover.value, cMover.setState];
    };
    const display = () => {
        p5.stroke(0);
        p5.fill(175);

        movers.forEach((mover) => {
            const {
                location: {x, y},
            } = mover.value;

            p5.ellipse(x, y, 16, 16);
        });
    };

    return {display, useState};
};

export default Mover;
