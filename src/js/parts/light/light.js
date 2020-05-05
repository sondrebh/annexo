// Libraries
import * as THREE from 'three';

// Parts
import scene from '../scene/scene';

// Setup
const ambientLight = new THREE.AmbientLight( 0xffffff, 0.5 );
scene.add( ambientLight );

const light = new THREE.DirectionalLight( 0xffffff, 0.7);

light.position.set( 25, 100, 25 );
light.target.position.set( 75, 0, 75 );

light.castShadow = true;

light.shadow.mapSize.width = 999999;
light.shadow.mapSize.height = 999999;

light.shadow.camera.left = -200;
light.shadow.camera.right = 200;
light.shadow.camera.top = 200;
light.shadow.camera.bottom = -200;


scene.add( light );

const helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );

export default light;