// Libraries
import * as THREE from 'three';

// Parts
import scene from '../parts/scene/scene';
import renderer, { composer } from '../parts/renderer/renderer';
import camera from '../parts/camera/camera';
import controls from '../parts/controller/controller';
import lightController from '../parts/light/lightcontroller';

// Setup
const loop = () => {
    requestAnimationFrame( loop );

    // Perform updates
    composer.render();

    controls.update();

    lightController.update();

    renderer.render( scene, camera );
};

export default loop;