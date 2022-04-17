import P5 from 'p5';

const Mover = (p5: P5) => {
    const movers = [];

    const useState = <T>(initialValue: T) => {
        const cMover = {
            value: initialValue,
            setState(newValue: T) {
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
