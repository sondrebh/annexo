// Libraries
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

// Setup
const loader = new GLTFLoader();

const load = path => {
    let model;
    
    return new Promise((resolve, reject) => {
        loader.load(
            path,
            ( model ) => {
                // called when the resource is loaded
                resolve(model);
            },
            ( xhr ) => {
                // called while loading is progressing
                console.log( `${( xhr.loaded / xhr.total * 100 )}% loaded` );
            },
            ( error ) => {
                // called when loading has errors
                reject(error);
            },
        );
    });
};

export default load;