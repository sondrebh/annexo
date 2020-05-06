// Libraries
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {BloomPass} from 'three/examples/jsm/postprocessing/BloomPass.js';
import {FilmPass} from 'three/examples/jsm/postprocessing/FilmPass.js';
import { HueSaturationEffect } from 'three/examples/jsm/postprocessing/AdaptiveToneMappingPass';
import scene from '../scene/scene';
import camera from '../camera/camera';

// Setup
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize( window.innerWidth, window.innerHeight );

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

renderer.toneMapping = THREE.NoToneMapping;
renderer.toneMappingExposure = 0.4;
renderer.toneMappingWhitePoint = 0.4;

renderer.outputEncoding = THREE.sRGBEncoding;
renderer.shadowMap.renderReverseSided = false;

export const composer = new EffectComposer( renderer );



export default renderer;
