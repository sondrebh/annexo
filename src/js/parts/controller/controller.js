// Libraries
import * as THREE from 'three';
import OrbitControls from './customControls';

// Parts
import camera from '../camera/camera';

// Setup
const controls = new OrbitControls(camera);
controls.enableRotate = false;
controls.target.set(0,0,-30);

export default controls;