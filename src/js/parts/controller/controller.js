// Libraries
import * as THREE from 'three';
import OrbitControls from 'three-orbit-controls';

// Parts
import camera from '../camera/camera';

// Setup
const oc = OrbitControls(THREE);
const controls = new oc(camera);

export default controls;