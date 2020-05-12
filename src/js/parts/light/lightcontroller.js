// Parts
import camera from '../camera/camera';
import light from './light';
import renderer from '../renderer/renderer';

const lightController = {
    distanceOffset: 6,

    init: function () {
        renderer.domElement.addEventListener('mousedown', e => {
            if(e.which === 3) {
                this.isPanning = true;
            }
        });

        renderer.domElement.addEventListener('mouseup', e => {
            if(e.which === 3) {
                this.isPanning = false;
            }
        });
    },

    update: function () {
        //if(this.isPanning) {
            light.position.x = camera.position.x + this.distanceOffset * 2;
            light.position.z = camera.position.z + this.distanceOffset * 2;

            light.target.position.set(camera.position.x - this.distanceOffset, -1, camera.position.z - this.distanceOffset);
        //}
    }
};

export default lightController;