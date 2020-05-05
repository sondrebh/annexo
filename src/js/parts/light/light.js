// Libraries
import * as THREE from 'three';

// Parts
import scene from '../scene/scene';

// Setup
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.4 );
scene.add( ambientLight );

const light = new THREE.DirectionalLight( 0xffffff, 1 );

light.position.set( 50, 50, 50 );
light.target.position.set( 0, 0, 0 );

light.castShadow = true;

light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;

scene.add( light );

const helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );