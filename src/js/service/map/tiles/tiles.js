// Libraries
import load from '../../utils/loadfile';

// Setup
const tiles = {
    water: {},
    grass: {},
    dirt: {},
    woods: {},
    mountain: {},
    buildings: {}
};

// Load water tiles
const waterTiles = [
    'Tile_Water_01_Coast',
    'Tile_Water_01_Coast_Outer',
    'Tile_Water_01_Sea'
];

// Load grass tiles
const grassTiles = [
    'Tile_Grass_01_Coast',
    'Tile_Grass_01_Land',
    'Tile_Grass_01_Inland'
];

// Load woods tiles
const woodsTiles = [
    'Tile_Grass_Woods_01',
    'Tile_Grass_Woods_02_Fruit',
    'Tile_Grass_Woods_02_Normal'
];

// Load mountain tiles
const mountainTiles = [
    'Tile_Mountain_01'
];

// Load building tiles
const buildingTiles = [
    'Tile_City_Townhall'
];

const loadTiles = async () => {

    // Water
    for(const tileName of waterTiles) {
        await load(
            'assets/models/tiles/water/' + tileName + '/' + tileName + '.gltf'
        ).then( model => {
            tiles.water = { ...tiles.water, [tileName]: model };
            console.log('Loaded: ' + tileName);
        }).catch( error => {
            console.log('Could not load model: ' + tileName + ' - ' + error);
        });
    }

    // Grass
    for(const tileName of grassTiles) {
        await load(
            'assets/models/tiles/grass/' + tileName + '/' + tileName + '.gltf'
        ).then( model => {
            tiles.grass = { ...tiles.grass, [tileName]: model };
            console.log('Loaded: ' + tileName);
        }).catch( error => {
            console.log('Could not load model: ' + tileName + ' - ' + error);
        });
    }

    // Woods
    for(const tileName of woodsTiles) {
        await load(
            'assets/models/tiles/woods/' + tileName + '/' + tileName + '.gltf'
        ).then( model => {
            tiles.woods = { ...tiles.woods, [tileName]: model };
            console.log('Loaded: ' + tileName);
        }).catch( error => {
            console.log('Could not load model: ' + tileName + ' - ' + error);
        });
    }

    // Mountains
    for(const tileName of mountainTiles) {
        await load(
            'assets/models/tiles/mountain/' + tileName + '/' + tileName + '.gltf'
        ).then( model => {
            tiles.mountain = { ...tiles.mountain, [tileName]: model };
            console.log('Loaded: ' + tileName);
        }).catch( error => {
            console.log('Could not load model: ' + tileName + ' - ' + error);
        });
    }

    // Buildings
    for(const tileName of buildingTiles) {
        await load(
            'assets/models/tiles/buildings/' + tileName + '/' + tileName + '.gltf'
        ).then( model => {
            tiles.buildings = { ...tiles.buildings, [tileName]: model };
            console.log('Loaded: ' + tileName);
        }).catch( error => {
            console.log('Could not load model: ' + tileName + ' - ' + error);
        });
    }
};

export { tiles, loadTiles };
