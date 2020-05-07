// Parts
import renderer from '../parts/renderer/renderer';

// Service
import pickObject from '../service/utils/pickobject';

// Global click listener
renderer.domElement.addEventListener('click', e => {


    pickObject(e, pickedObject => {
        if(!pickedObject.name.includes('Tile')) {
            pickedObject.parent.position.y += 1;
        } else {
            pickedObject.position.y += 1;
        }
    });

});