class Cannon {
    constructor(img, width, height) {
        this.image = img;
        this.x = 30;
        this.y = 485;
        this.width = width;
        this.height = height;
    }

    moveCannon = () => {
        let angleRad = Math.atan((mouseY - 485) / (mouseX - 30));
        let angleDegrees = 180 * angleRad / PI;
        if (angleDegrees >= -90 && angleDegrees <= 0) {
            background(164, 217, 224);
            translate(30, 485);
            rotate(angleRad);
            image(this.image, 0, 0, this.width, this.height);
        }
    }
}