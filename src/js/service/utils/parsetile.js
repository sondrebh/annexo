// Libraries
import * as THREE from 'three';

// Setup
const parseTile = tile => {
    return tile.traverse( function( node ) {

        if(node.isMesh) { 

            node.castShadow = true;

            if(node.name.includes('Water')) {
                node.castShadow = false; 
            }

            node.receiveShadow = true;

            if(node.name === 'decorator_natural_grasslands') {
                node.material.shadowSide = THREE.FrontSide;
            }

            if(node.material.map) {
                node.material.map.anisotropy = 16;
            }
        }
    });
};

export default parseTile;