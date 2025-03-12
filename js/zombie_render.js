// main.js
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { FBXLoader } from "three/addons/loaders/FBXLoader.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
	40,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
// camera.position.z = 5;
camera.position.set(0, 0, 5);

const renderer = new THREE.WebGLRenderer({ alpha: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0xffffff, 0); // Fond transparent
// renderer.setClearColor(0xffffff); // Fond blanc

document.getElementById("zombie-container").appendChild(renderer.domElement);
const textureLoader = new THREE.TextureLoader();
textureLoader.load(
	"render/zombie/ImphenziaPalette02-Albedo.jpg",
	function (texture) {
		// Set the texture properties
		texture.flipY = false; // Don't flip the texture on the Y-axis

		// Load the model
		const loader = new GLTFLoader();
		loader.load(
			"render/zombie/zombie.gltf",
			function (gltf) {
				gltf.scene.traverse(function (node) {
					if (node.isMesh) {
						// Apply the loaded texture to the material
						node.material.map = texture;
						node.material.needsUpdate = true;
					}
				});
				gltf.scene.rotation.set(0, Math.PI, 0);
				const group = new THREE.Group();
				gltf.scene.position.set(0, -1, 0);
				group.add(gltf.scene);
				scene.add(group);
			},
			undefined,
			function (error) {
				console.error(error);
			}
		);
	},
	undefined,
	function (error) {
		console.error("Error loading texture:", error);
	}
);

const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemiLight.position.set(0, 20, 0);
scene.add(hemiLight);

var controls = new OrbitControls(camera, renderer.domElement);

function animate() {
	requestAnimationFrame(animate);
	controls.update();
	renderer.render(scene, camera);
}
animate();