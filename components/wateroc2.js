AFRAME.registerComponent('wateroc2', {
    schema: {},
    init: function () {
        // get basic elements for three.js
        var scene = document.querySelector('a-scene').object3D;
        var renderer = document.querySelector('a-scene').systems["renderer"];
        var camera = document.querySelector('a-camera').object3D;
        console.log("Got renderer: " + renderer); // DEBUG
        
        var gsize = 512;
        var res = 1024;
        var gres = res / 2;
        var origx = - gsize / 2;
        var origz = - gsize / 2;
        var ocean = new Ocean(renderer, camera, scene,
            {
                USE_HALF_FLOAT: false,
                INITIAL_SIZE: 256.0,
                INITIAL_WIND: [10.0, 10.0],
                INITIAL_CHOPPINESS: 1.5,
                CLEAR_COLOR: [1.0, 1.0, 1.0, 0.0],
                GEOMETRY_ORIGIN: [origx, origz],
                SUN_DIRECTION: [- 1.0, 1.0, 1.0],
                OCEAN_COLOR: new THREE.Vector3(0.004, 0.016, 0.047),
                SKY_COLOR: new THREE.Vector3(3.2, 9.6, 12.8),
                EXPOSURE: 0.35,
                GEOMETRY_RESOLUTION: gres,
                GEOMETRY_SIZE: gsize,
                RESOLUTION: res
            });
    },
    update: function () { },
    tick: function (time, timeDelta) {
        this.ocean.render(timeDelta);
     },
    remove: function () { },
    pause: function () { },
    play: function () { }
});