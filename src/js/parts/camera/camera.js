// Libraries
import * as THREE from 'three';

// Setup
const camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 1, 100000);

camera.position.y = 40;


export default camera;