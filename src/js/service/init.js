// Libraries
import * as THREE from 'three';

// Parts
import renderer from '../parts/renderer/renderer';
import camera from '../parts/camera/camera';
import scene from '../parts/scene/scene';
import '../parts/light/light';

// Service
import generate from '../service/map/generate';
import './events';

// Setup
const init = () => {
    scene.background = new THREE.Color(0x2B4568);

    var axesHelper = new THREE.AxesHelper( 5 );
    //scene.add( axesHelper );

    generate(30, 30, 15, Math.random);
};

export default init;