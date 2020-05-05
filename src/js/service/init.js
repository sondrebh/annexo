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
    camera.position.z = 5;
    camera.position.y = 5;
    camera.rotation.x = -1;

    scene.background = new THREE.Color(0xa2a2a2);

    var axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );

    generate();
};

export default init;