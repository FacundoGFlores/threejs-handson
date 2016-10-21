var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({color: 0x00ff00});
var cube = new THREE.Mesh(geometry, material);
scene.add(cube);
camera.position.z = 20;

function render() {
    requestAnimationFrame( render );
    renderer.render( scene, camera );
}
render();

cube.setColor = function(color){
    cube.material.color = new THREE.Color(color);
}

$(".btnColor").on('click', function(){
    cube.setColor(this.value);
});

$("#btnRotate").on('click', function(){
    cube.rotation.x += 0.5;
    cube.rotation.y += 0.5;
    cube.rotation.z += 0.5;
});

$(".btnMove").on('click', function(){
    if (this.value == "right") {
        cube.position.x += 0.5;
    }
    if (this.value == "left") {
        cube.position.x -= 0.5;
    }
    if (this.value == "up") {
        cube.position.y += 0.5;
    }
    if (this.value == "down") {
        cube.position.y -= 0.5;
    }
});