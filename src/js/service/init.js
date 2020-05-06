// Libraries
import * as THREE from 'three';

// Parts
import camera from '../parts/camera/camera';
import scene from '../parts/scene/scene';
import '../parts/light/light';

// Service
import generate from '../service/map/generate';

// Setup
const init = () => {
    scene.background = new THREE.Color(0x2B4568);

    var axesHelper = new THREE.AxesHelper( 5 );
    //scene.add( axesHelper );

    generate(44, 44, 20, Math.random);
};

export default init;