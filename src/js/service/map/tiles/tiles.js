// Libraries
import load from '../../utils/loadfile';

// Setup
const tiles = {
    water: {},
    grass: {},
    dirt: {},
    woods: {}
};

// Load water tiles
const waterTiles = [
    'Tile_Water_01_Coast',
    'Tile_Water_01_Coast_Outer',
    'Tile_Water_01_Sea'
];

const loadTiles = async () => {

    // Water
    for(const tileName of waterTiles) {
        await load(
            '/assets/models/tiles/water/' + tileName + '/' + tileName + '.gltf'
        ).then( model => {
            tiles.water = { ...tiles.water, [tileName]: model };
            console.log('Loaded: ' + tileName);
        }).catch( error => {
            console.log('Could not load model: ' + tileName + ' - ' + error);
        });
    }

};

export { tiles, loadTiles };
