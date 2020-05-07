// Libraries
import * as THREE from 'three';

// Parts
import renderer from '../../parts/renderer/renderer';
import camera from '../../parts/camera/camera';

const getScreenPos = obj => {
    const vector = new THREE.Vector3();

    const widthHalf = 0.5 * renderer.context.canvas.width;
    const heightHalf = 0.5 * renderer.context.canvas.height;

    obj.updateMatrixWorld();
    vector.setFromMatrixPosition(obj.matrixWorld);
    vector.project(camera);

    vector.x = ( vector.x * widthHalf ) + widthHalf;
    vector.y = - ( vector.y * heightHalf ) + heightHalf;

    return { 
        x: vector.x,
        y: vector.y
    };
};

export default getScreenPos;