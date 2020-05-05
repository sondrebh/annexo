// Libraries
import * as THREE from 'three';

// Setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

export default renderer;