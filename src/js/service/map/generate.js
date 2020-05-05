// Libraries
import * as SimplexNoise from 'simplex-noise';
import * as THREE from 'three';

// Parts
import scene from '../../parts/scene/scene';
import { tiles, loadTiles } from './tiles/tiles';

// Setup
const generate = (sizeX, sizeY) => {
    const simplex = new SimplexNoise(Math.random);
    const scale = 35;

    loadTiles().then(() => {
        for(let i = 0; i < sizeY; i++) {
            for(let j = 0; j < sizeX; j++) {
                const value2d = simplex.noise2D(j / scale, i / scale);
                
                let tile;

                if(value2d < -0.7) {
                    tile = tiles.water.Tile_Water_01_Sea;
                } else if (value2d < -0.5 ) {
                    tile = tiles.water.Tile_Water_01_Coast_Outer;
                } else if (value2d < -0.4) {
                    tile = tiles.water.Tile_Water_01_Coast;
                } else if (value2d < -0.1) {
                    tile = tiles.grass.Tile_Grass_01_Coast;
                } else if (value2d < 0.3) {
                    tile = tiles.grass.Tile_Grass_01_Land;
                } else if (value2d < 0.7) {
                    tile = tiles.grass.Tile_Grass_01_Inland;
                } else if (value2d < 1) {
                    tile = tiles.woods.Tile_Grass_Woods_02_Normal;
                }

                spawnTile(tile, newTile => {
                    const tileOffsetWidth = 1 / tileSize(tiles.grass.Tile_Grass_01_Coast.scene).width;
                    const tileOffsetHeight = 1 / tileSize(tiles.grass.Tile_Grass_01_Coast.scene).height;

                    if(i % 2 === 0) {
                        newTile.position.x = j / tileOffsetWidth;
                    } else {
                        newTile.position.x = j / tileOffsetWidth - tileSize(tiles.grass.Tile_Grass_01_Coast.scene).width / 2;
                    }
        
                    newTile.position.z = (i / tileOffsetHeight) / 1.333;
                });
            }
        }
    });
}

const spawnTile = (tile, callback) => {
    const newTile = tile.scene.clone();

    newTile.traverse( function( node ) {
        if(node.isMesh) { 
            node.castShadow = true; 
            node.receiveShadow = true;
        }
    });

    if(callback) {
        callback(newTile);
    }

    scene.add( newTile );
};

const tileSize = tile => {
    const boundingBox = new THREE.Box3().setFromObject( tile );
    return { width: boundingBox.getSize(new THREE.Vector3()).x, height: boundingBox.getSize(new THREE.Vector3()).z };
};

export default generate;