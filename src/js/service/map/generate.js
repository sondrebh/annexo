// Libraries
import * as SimplexNoise from 'simplex-noise';

// Parts
import scene from '../../parts/scene/scene';
import { tiles, loadTiles } from './tiles/tiles';

// Setup
const generate = (sizeX, sizeY) => {
    loadTiles().then(() =>{
        tiles.water.Tile_Water_01_Coast.scene.traverse( function( node ) {

            if ( node.isMesh ) { node.castShadow = true; node.receiveShadow = true; }
    
        } );
        scene.add( tiles.water.Tile_Water_01_Coast.scene );
    });
}

export default generate;