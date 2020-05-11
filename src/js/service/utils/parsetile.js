// Libraries
import * as THREE from 'three';

// Service
import getAdjacentTiles from '../utils/getadjacenttiles';

// Setup
const parseTile = tile => {
    
    let castShadow = false;

    const adjacentTiles = getAdjacentTiles(tile, 1);

    adjacentTiles.forEach(adjacentTile => {
        if(adjacentTile.name.includes('Water')) {
            castShadow = true;
        }
    });

    if(
        !tile.name.includes('Grass')
        ||
        tile.name.includes('Woods')
        ||
        tile.name.includes('Mountain')
        ||
        tile.name.includes('City')
    ) {
        castShadow = true; 
    }

    if(tile.name.includes('Water')) {
        castShadow = false; 
    }

    return tile.traverse( function( node ) {

        if(node.isMesh) { 

            node.castShadow = castShadow;
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