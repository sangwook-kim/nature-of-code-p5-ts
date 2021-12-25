import P5 from 'p5';

const PerlinWalker = ({p5, width, height}: {p5: P5; width: number; height: number}) => {
    let tx = 0;
    let ty = 10000;

    const {map, noise} = p5;

    const step = () => {
        const x = map(noise(tx), 0, 1, 0, width);
        const y = map(noise(ty), 0, 1, 0, height);

        tx += 0.01;
        ty += 0.01;

        return {x, y};
    };

    return {step};
};

export default PerlinWalker;
