// Libraries
import * as THREE from 'three';

// Parts
import scene from '../parts/scene/scene';
import renderer, { composer } from '../parts/renderer/renderer';
import camera from '../parts/camera/camera';
import controls from '../parts/controller/controller';
import light from '../parts/light/light';

// Setup
const loop = () => {
    requestAnimationFrame( loop );

    // Perform updates
    controls.update();
    composer.render();

    renderer.render( scene, camera );
};

export default loop;