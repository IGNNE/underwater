/**
 * WAframe wrapper around the jbouny / three.js Water
 * @author IGNNE
 */

import { Water } from '../lib/three.js/Water.js';

AFRAME.registerComponent('water', {
    water: null,
    schema: {
        waterColor: { type: 'int', default: 0x001E0F },
        sunColor: { type: 'int', default: 0xFFFFFF }
    },
    init: function () {
        // get basic elements for three.js
        let scene = document.querySelector('a-scene').object3D;
        let renderer = document.querySelector('a-scene').systems["renderer"];
        let camera = document.querySelector('a-camera').object3D;

        let waterGeometry = new THREE.PlaneBufferGeometry(10000, 10000);
        this.water = new Water(
            waterGeometry,
            {
                textureWidth: 512,
                textureHeight: 512,
                waterNormals: new THREE.TextureLoader().load('textures/waternormals.jpg', function (texture) {
                    texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
                }),
                alpha: 0.98,
                sunColor: this.data.sunColor,
                waterColor: this.data.waterColor,
                distortionScale: 2,
                fog: scene.fog !== undefined
            }
        );
        // flip the "surface" to point upside down -> TODO make configurable (or even better, make it work with position/rotation)
        this.water.rotation.x = Math.PI / 2;
        scene.add(this.water);
    },
    update: function () {
        // TODO
    },
    tick: function (time, timeDelta) {
        this.water.material.uniforms['time'].value += timeDelta / 1000 // use the real timeDelta
    },
    remove: function () { },
    pause: function () { },
    play: function () { }
});