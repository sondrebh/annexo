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

export let mapTiles = [];

document.addEventListener( 'mousemove', onDocumentMouseDown );

function onDocumentMouseDown( event ) {    
    
        event.preventDefault();
        var mouse3D = new THREE.Vector3( ( event.clientX / window.innerWidth ) * 2 - 1,   
                                -( event.clientY / window.innerHeight ) * 2 + 1,  
                                0.5 );     
        var raycaster =  new THREE.Raycaster();                                        
       raycaster.setFromCamera( mouse3D, camera );
        var intersects = raycaster.intersectObjects( mapTiles, true );

        if ( intersects.length > 0 ) {
            const obj = intersects[ 0 ].object;

            if(!obj.name.includes('Tile')) {
                obj.parent.position.y += 1;
            } else {
                obj.position.y += 1;
            }
        }
    
}

export default renderer;
