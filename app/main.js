import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'



const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 100000 );
const loader = new GLTFLoader();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );
const controls = new OrbitControls(camera,renderer.domElement);
const sunRadius = 150;
const texture = new THREE.TextureLoader();
const sunT = texture.load('src/sun.jpg');
const earthT = texture.load('src/earth.jpg');
const jupiterT = texture.load('src/jupiter.jpg');
const marsT = texture.load('src/mars.jpg');
const mercuryT = texture.load('src/mercury.jpg');
const neptuneT = texture.load('src/neptune.jpg');
const saturnT = texture.load('src/saturn.jpg');
const uranusT = texture.load('src/uranus.jpg');
const venusT = texture.load('src/venus.jpg');
const plutoT = texture.load('src/pluto.jpg');

const sun = new THREE.Mesh(new THREE.SphereGeometry(sunRadius,32,32),new THREE.MeshBasicMaterial({map:sunT}));
const earth = new THREE.Mesh(new THREE.SphereGeometry(12.7,32,32),new THREE.MeshBasicMaterial({map:earthT}));
const jupiter = new THREE.Mesh(new THREE.SphereGeometry(139,32,32),new THREE.MeshBasicMaterial({map:jupiterT}));
const mars = new THREE.Mesh(new THREE.SphereGeometry(6.7,32,32),new THREE.MeshBasicMaterial({map:marsT}));
const mercury = new THREE.Mesh(new THREE.SphereGeometry(4.8,32,32),new THREE.MeshBasicMaterial({map:mercuryT}));
const neptune = new THREE.Mesh(new THREE.SphereGeometry(49,32,32),new THREE.MeshBasicMaterial({map:neptuneT}));
const saturn = new THREE.Mesh(new THREE.SphereGeometry(116,32,32),new THREE.MeshBasicMaterial({map:saturnT}));
const uranus = new THREE.Mesh(new THREE.SphereGeometry(50,32,32),new THREE.MeshBasicMaterial({map:uranusT}));
const venus = new THREE.Mesh(new THREE.SphereGeometry(12.1,32,32),new THREE.MeshBasicMaterial({map:venusT}));
const pluto = new THREE.Mesh(new THREE.SphereGeometry(2.3,32,32),new THREE.MeshBasicMaterial({map:plutoT}));
const light = new THREE.AmbientLight({color:0xfffff})
sun.position.x = 0;
mercury.position.x = 0;
mercury.position.y = 0;
scene.add(light)
scene.add(sun);
scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);
scene.add(jupiter);
scene.add(saturn);
scene.add(uranus);
scene.add(neptune);
scene.add(pluto);
const grid = new THREE.GridHelper(10000,100);
scene.add(grid);

camera.position.z = 1000;
var ang = 0;
var ang1 = 0;
var ang2 = 0;
var ang3 = 0;
var ang4 = 0;
var ang5 = 0;
var ang6 = 0;
var ang7 = 0;
var ang8 = 0;
function animate() {
	requestAnimationFrame( animate );
    sun.rotation.y += 0.001;
    
    mercury.position.x = Math.sin(ang)*(sunRadius+58);
    mercury.position.z = Math.cos(ang)*(sunRadius+58);
    mercury.rotation.y = ang*10;

    venus.position.x = Math.sin(ang1)*(sunRadius+107);
    venus.position.z = Math.cos(ang1)*(sunRadius+107);
    venus.rotation.y = ang1*10;

    earth.position.x = Math.sin(ang2)*(sunRadius+149);
    earth.position.z = Math.cos(ang2)*(sunRadius+149);
    earth.rotation.y = ang2*10;

    mars.position.x = Math.sin(ang3)*(sunRadius+227);
    mars.position.z = Math.cos(ang3)*(sunRadius+227);
    mars.rotation.y = ang3*10;

    jupiter.position.x = Math.sin(ang4)*(sunRadius+778);
    jupiter.position.z = Math.cos(ang4)*(sunRadius+778);
    jupiter.rotation.y = ang4*10;

    saturn.position.x = Math.sin(ang5)*(sunRadius+1433);
    saturn.position.z = Math.cos(ang5)*(sunRadius+1433);
    saturn.rotation.y = ang5*10;

    uranus.position.x = Math.sin(ang6)*(sunRadius+2874);
    uranus.position.z = Math.cos(ang6)*(sunRadius+2874);
    uranus.rotation.y = ang6*10;

    neptune.position.x = Math.sin(ang7)*(sunRadius+4504);
    neptune.position.z = Math.cos(ang7)*(sunRadius+4504);
    neptune.rotation.y = ang7*10;

    pluto.position.x = Math.sin(ang8)*(sunRadius+5857);
    pluto.position.z = Math.cos(ang8)*(sunRadius+5857);
    pluto.rotation.y = ang8*10;

    ang+=0.09;
    ang1+=0.05;
    ang2+=0.009;
    ang3+=0.005;
    ang4+=0.001;
    ang5+=0.0009;
    ang6+=0.0005;
    ang7+=0.0001;
    ang8+=0.00009;
    controls.update(); 
	renderer.render( scene, camera );
}

animate();