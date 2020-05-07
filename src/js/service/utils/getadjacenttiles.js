// Libraries
import * as THREE from 'three';

// Parts
import scene from '../../parts/scene/scene';

// Setup
const getAdjacentTiles = (tile, distance) => {
    const adjacentTiles = [];

    for(const object of scene.children) {
        if(object.name.includes('Tile')) {
            const { x: x2, z: z2 } = object.position;
            const { x: x1, z: z1 } = tile.position;

            const length = Math.hypot(x2 - x1, z2 - z1);

            if(length < distance * 2) {
                adjacentTiles.push(object);
            }
        }
    }

    return adjacentTiles;
};

export default getAdjacentTiles;