// Libraries
import * as THREE from 'three';

// Parts
import renderer from '../parts/renderer/renderer';
import scene from '../parts/scene/scene';

// Service
import pickObject from '../service/utils/pickobject';
import getScreenPos from '../service/utils/getscreenpos';
import parseTile from '../service/utils/parsetile';
import getAdjacentTiles from '../service/utils/getadjacenttiles';

// Models
import { tiles } from '../service/map/tiles/tiles';

const getTopParent = obj => {
    if('parent' in obj) { // Has parent
        let topParent;

        return new Promise((resolve, reject) => {
            const traverseUp = object => {
                if(object.parent.type !== 'Scene') {
                    traverseUp(object.parent);
                } else {
                    topParent = object;
                    resolve(topParent);
                }
            };

            traverseUp(obj);
        });
    }
};

// Global click listener
renderer.domElement.addEventListener('click', e => {

    // Replace tile
    pickObject(e, pickedObject => {

        let pickedObjectTop;

        getTopParent(pickedObject).then(top => {
            pickedObjectTop = top;
        
            const pos = pickedObjectTop.position;

            scene.remove(pickedObjectTop);

            const newTile = tiles.buildings.Tile_City_Townhall.scene.clone();
            newTile.position.set(pos.x, pos.y, pos.z);

            parseTile(newTile);

            scene.add(newTile);

            getAdjacentTiles(newTile, 1).forEach(tile => {
                var outlineMaterial = new THREE.MeshBasicMaterial( { color: 0xffffff, side: THREE.FrontSide, transparent: true, opacity: 0.5 } );
                var outlineMesh = new THREE.Mesh( tile.children[0].geometry.clone(), outlineMaterial );
                outlineMesh.scale.multiplyScalar( 1.02 );
                outlineMesh.position.y = tile.position.y + 1.01;
                tile.add( outlineMesh );
            });
        });

    });

    /* Elevatetarget logic
    pickObject(e, pickedObject => {
        if(!pickedObject.name.includes('Tile')) {
            pickedObject.parent.position.y += 1;
        } else {
            pickedObject.position.y += 1;
        }
    });
    */

});