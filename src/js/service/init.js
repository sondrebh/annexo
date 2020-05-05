// Libraries
import * as THREE from 'three';

// Parts
import camera from '../parts/camera/camera';
import scene from '../parts/scene/scene';
import renderer from '../parts/renderer/renderer';

// Setup
const init = () => {
    camera.position.z = 5;
    camera.position.y = 5;
    camera.rotation.x = -1;

    const geometry = new THREE.PlaneGeometry( 20, 20 );
    const material = new THREE.MeshBasicMaterial( {color: 0xa2a2a2, side: THREE.DoubleSide} );
    const oceanFloor = new THREE.Mesh( geometry, material );

    oceanFloor.rotation.x = Math.PI / 2;

    oceanFloor.receiveShadow = true;

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap; // default THREE.PCFShadowMap

    //Create a SpotLight and turn on shadows for the light
    var light = new THREE.SpotLight( 0xffffff, 0.7 );
    light.castShadow = true;            // default false
    light.position.y = 100;
    scene.add( light );

    //Set up shadow properties for the light
    light.shadow.mapSize.width = 512;  // default
    light.shadow.mapSize.height = 512; // default
    light.shadow.camera.near = 0.5;       // default
    light.shadow.camera.far = 500      // default

    //Create a helper for the shadow camera (optional)
    var helper = new THREE.CameraHelper( light.shadow.camera );
    scene.add( helper );

    scene.add(oceanFloor);
};

export default init;