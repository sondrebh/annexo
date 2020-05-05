// Libraries
import * as THREE from 'three';

// Parts
import camera from '../parts/camera/camera';
import scene from '../parts/scene/scene';
import renderer from '../parts/renderer/renderer';
import '../parts/light/light';

// Setup
const init = () => {
    camera.position.z = 5;
    camera.position.y = 5;
    camera.rotation.x = -1;

    scene.background = new THREE.Color(0xa2a2a2);

    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;

    var geometry = new THREE.PlaneGeometry( 5, 20, 32 );
    var material = new THREE.MeshPhongMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
    var plane = new THREE.Mesh( geometry, material );
    plane.rotation.x = Math.PI / 2;
    plane.receiveShadow = true;
    scene.add( plane );

    var geometry = new THREE.BoxGeometry( 1, 1, 1 );
    var material = new THREE.MeshPhongMaterial( {color: 0x00ff00} );
    var cube = new THREE.Mesh( geometry, material );
    cube.position.y = 1;
    cube.castShadow = true;
    scene.add( cube );

    var axesHelper = new THREE.AxesHelper( 5 );
    scene.add( axesHelper );
};

export default init;