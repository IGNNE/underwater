/**
 * Move a camera rig according to thumb-controls events
 * TODO WIP broken
 * @author IGNNE
 */

AFRAME.registerComponent("water", {
    direction: "",
    speed: 0,
    schema: {
        cameraRig: { type: "t" },
        speed: { type: "number"; default: "0.3" }
    },
    init: function () {
        entityEl.addEventListener('thumbleftstart', (event) => {
            this.direction = "x";
            this.speed = - this.data.speed;
        });
        entityEl.addEventListener('thumbrightstart', (event) => {
            this.direction = "x";
            this.distance = this.data.speed;
        });
        entityEl.addEventListener('thumbupstart', (event) => {
            this.direction = "z";
            this.distance = this.data.speed;
        });
        entityEl.addEventListener('thumbdownstart', (event) => {
            this.direction = "z";
            this.distance = - this.data.speed;
        });
        entityEl.addEventListener('thumbleft', (event) => {
            this.direction = "x";
            this.distance = - this.data.speed;
        });
        entityEl.addEventListener('thumbright', (event) => {
            this.direction = "x";
            this.distance = this.data.speed;
        });
        entityEl.addEventListener('thumbup', (event) => {
            this.direction = "z";
            this.distance = - this.data.speed;
        });
        entityEl.addEventListener('thumbdown', (event) => {
            this.direction = "z";
            this.distance = this.data.speed;
        });
    },
    update: function () { },
    tick: function (time, timeDelta) {
        if (this.speed != 0) {
            const position = this.data.cameraRig.getAttribute('position');
            position[direction] += speed / (timeDelta / 1000);
            this.data.cameraRig.setAttribute('position', position);
        }
    },
    remove: function () { },
    pause: function () { },
    play: function () { }
});