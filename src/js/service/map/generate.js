// Libraries
import * as SimplexNoise from 'simplex-noise';
import * as THREE from 'three';

// Parts
import scene from '../../parts/scene/scene';
import { tiles, loadTiles } from './tiles/tiles';

// Setup
const generate = (sizeX, sizeY) => {
    const simplex = new SimplexNoise(Math.random);
    const scale = 28;

    const mapTiles = [];

    loadTiles().then(() => {
        for(let i = 0; i < sizeY; i++) {
            for(let j = 0; j < sizeX; j++) {
                const value2d = simplex.noise2D(j / scale, i / scale);
                
                let tile;

                if(value2d < -0.5) { // Sea
                    tile = tiles.water.Tile_Water_01_Sea;
                } else if (value2d < -0.1 ) { // Sea outer
                    tile = tiles.water.Tile_Water_01_Coast_Outer;
                } else if (value2d < 0.1) { // Sea coast
                    tile = tiles.water.Tile_Water_01_Coast;
                } else if (value2d < 0.2) { // Grass coast
                    const value2d_1 = simplex.noise2D(j, i);
                    if(value2d_1 < 0.5) {
                        tile = tiles.grass.Tile_Grass_01_Coast
                    } else if(value2d_1 < 1) {
                        tile = tiles.grass.Tile_Grass_01_Land
                    }
                } else if (value2d < 0.3) { // Grass land
                    const value2d_1 = simplex.noise2D(j, i);
                    if(value2d_1 < 0.5) {
                        tile = tiles.grass.Tile_Grass_01_Land
                    } else if(value2d_1 < 1) {
                        tile = tiles.grass.Tile_Grass_01_Inland
                    }
                } else if (value2d < 0.8) { // Grass inland
                    const value2d_1 = simplex.noise2D(j, i);
                    if(value2d_1 < 0.5) {
                        tile = tiles.grass.Tile_Grass_01_Inland
                    } else if(value2d_1 < 1) {
                        tile = tiles.grass.Tile_Grass_01_Land
                    }
                } else if (value2d < 1) { // Woods
                    const value2d_1 = simplex.noise2D(j, i);
                    if(value2d_1 < -0.6) {
                        tile = tiles.woods.Tile_Grass_Woods_02_Normal
                    } else if(value2d_1 < 0.3) {
                        tile = tiles.woods.Tile_Grass_Woods_02_Fruit
                    } else if(value2d_1 < 1) {
                        tile = tiles.woods.Tile_Grass_Woods_01
                    }
                }

                addTile(tile, newTile => {
                    const tileOffsetWidth = 1 / tileSize(tiles.grass.Tile_Grass_01_Coast.scene).width;
                    const tileOffsetHeight = 1 / tileSize(tiles.grass.Tile_Grass_01_Coast.scene).height;

                    if(i % 2 === 0) {
                        newTile.position.x = j / tileOffsetWidth;
                    } else {
                        newTile.position.x = j / tileOffsetWidth - tileSize(tiles.grass.Tile_Grass_01_Coast.scene).width / 2;
                    }
        
                    newTile.position.z = (i / tileOffsetHeight) / 1.333;

                    mapTiles.push(newTile);
                });

                if(j === sizeX - 1) {
                    spawnTiles(mapTiles);
                }
            }
        }
    });
}

const chooseOne = arr => {
    return arr[Math.floor(Math.random() * arr.length)];
};

const spawnTiles = tiles => {
    for(const tile of tiles) {
        tile.traverse( function( node ) {
            if(node.isMesh) { 
                node.castShadow = true; 
                node.receiveShadow = true;
            }
        });

        scene.add(tile);
    };
};

const addTile = (tile, callback) => {
    const newTile = tile.scene.clone();

    if(callback) {
        callback(newTile);
    }
};

const tileSize = tile => {
    const boundingBox = new THREE.Box3().setFromObject( tile );
    return { width: boundingBox.getSize(new THREE.Vector3()).x, height: boundingBox.getSize(new THREE.Vector3()).z };
};

export default generate;