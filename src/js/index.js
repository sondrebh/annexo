// Annexo root

// Styling
import '../scss/main.scss';

// Parts
import renderer from './parts/renderer/renderer';

// Service
import init from './service/init';
import loop from './service/loop';

// Setup
document.body.appendChild( renderer.domElement );

// Initialize and start render loop
init();
loop();

