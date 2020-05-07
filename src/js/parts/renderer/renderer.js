// Libraries
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import {RenderPass} from 'three/examples/jsm/postprocessing/RenderPass.js';
import {OutlinePass} from 'three/examples/jsm/postprocessing/OutlinePass';
import {ShaderPass} from 'three/examples/jsm/postprocessing/ShaderPass';
import {FXAAShader} from 'three/examples/jsm/shaders/FXAAShader';
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

export const composer = new EffectComposer( renderer );

var renderPass = new RenderPass(scene, camera);
composer.addPass(renderPass);

export default renderer;
