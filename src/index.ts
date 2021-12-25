import P5 from 'p5';

const sketch = (p5: P5) => {
    const {noise, map} = p5;
    const width = 640;
    const height = 360;
    const img = p5.createImage(width, height);

    let tx = 10000;
    let ty = 0;
    let tz = 1234;

    p5.setup = () => {
        const canvas = p5.createCanvas(width, height);

        canvas.parent('p5app');

        noiseImage(img);
        p5.image(img, 0, 0);
    };

    const noiseImage = (img: P5.Image) => {
        img.loadPixels();

        tx = 10000;
        for (let i = 0; i < img.width; i++) {
            tx += 0.01;
            ty = 0;
            for (let j = 0; j < img.height; j++) {
                ty += 0.01;
                const bright = map(noise(tx, ty, tz), 0, 1, 0, 255);
                const index = (i + j * width) * 4;
                img.pixels[index] = bright;
                img.pixels[index + 1] = bright;
                img.pixels[index + 2] = bright;
                img.pixels[index + 3] = 255;
            }
        }
        tz += 0.02;

        img.updatePixels();
    };

    p5.draw = () => {
        noiseImage(img);
        p5.image(img, 0, 0);
    };

    p5.mousePressed = () => {
        if (p5.isLooping()) {
            p5.noLoop();
        } else {
            p5.loop();
        }
    };
};

new P5(sketch);
