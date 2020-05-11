// Libraries
import * as THREE from 'three';

// Parts
import scene from '../scene/scene';

// Setup
const hemLight = new THREE.HemisphereLight( 0xffffff, 0x8c8c8c, 0.8);
scene.add(hemLight);

const light = new THREE.SpotLight( 0xffa95c, 0.8 );
light.position.y = 40;
light.shadow.bias = -0.00001;

light.castShadow = true;

light.shadow.mapSize.width = 1024*200;
light.shadow.mapSize.height = 1024*200;

scene.add( light );
scene.add( light.target );

const helper = new THREE.CameraHelper( light.shadow.camera );
scene.add( helper );

export default light;