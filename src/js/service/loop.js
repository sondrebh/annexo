// Libraries
import * as THREE from 'three';

// Parts
import scene from '../parts/scene/scene';
import renderer from '../parts/renderer/renderer';
import camera from '../parts/camera/camera';
import controls from '../parts/controller/controller';

// Setup
const loop = () => {
    requestAnimationFrame( loop );

    // Perform updates
    controls.update();

    renderer.render( scene, camera );
};

export default loop;