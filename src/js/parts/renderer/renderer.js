// Libraries
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {BloomPass} from 'three/examples/jsm/postprocessing/BloomPass.js';
import {FilmPass} from 'three/examples/jsm/postprocessing/FilmPass.js';
import scene from '../scene/scene';
import camera from '../camera/camera';

// Setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.toneMapping = THREE.Uncharted2ToneMapping;
renderer.toneMappingExposure = 0.24;
renderer.toneMappingWhitePoint = 1;

export const composer = new EffectComposer( renderer );

composer.addPass(new RenderPass(scene, camera));

const bloomPass = new BloomPass(
    1,    // strength
    25,   // kernel size
    4,    // sigma ?
    256,  // blur render target resolution
);
composer.addPass(bloomPass);

const filmPass = new FilmPass(
    0.35,   // noise intensity
    0.025,  // scanline intensity
    648,    // scanline count
    false,  // grayscale
);
filmPass.renderToScreen = true;
composer.addPass(filmPass);

export default renderer;
