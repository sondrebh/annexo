// Libraries
import * as THREE from 'three';
import camera from '../../parts/camera/camera';
import scene from '../../parts/scene/scene';

// Setup
const pickObject = (e, callback) => {
    e.preventDefault();

    const mouse3D = new THREE.Vector3(
        ( event.clientX / window.innerWidth ) * 2 - 1,   
        -( event.clientY / window.innerHeight ) * 2 + 1,  
        0.5 
    );

    const raycaster = new THREE.Raycaster();
    raycaster.setFromCamera( mouse3D, camera );

    const intersects = raycaster.intersectObjects( scene.children, true );

    if ( intersects.length > 0 ) {
        const obj = intersects[0].object;
    
        callback(obj);   
    }
};

export default pickObject;