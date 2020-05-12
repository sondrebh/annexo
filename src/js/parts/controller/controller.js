// Libraries
import * as THREE from 'three';
import OrbitControls from './customControls';

// Parts
import camera from '../camera/camera';

// Setup
const controls = new OrbitControls(camera);

controls.enableRotate = false;
controls.target.set(10,0,5);

controls.minDistance = 40;
controls.maxDistance = 60;

export default controls;