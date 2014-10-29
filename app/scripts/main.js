var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

var COUNT = 10;
var RADIUS = 1;

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var circleGeo = new THREE.SphereGeometry( RADIUS, 32, 32 );
//var material = new THREE.MeshBasicMaterial({ wireframe: true, wireframeLinewidth: 5 });
var material = new THREE.MeshPhongMaterial({ wireframe: false, shading: THREE.FlatShading, transparent: true, opacity: 0.5 });
var cube = new THREE.Mesh( geometry, material );

var HALF_COUNT = COUNT / 2;

for (var x = -HALF_COUNT; x < HALF_COUNT; x++) {
    for (var y = -HALF_COUNT; y < HALF_COUNT; y++) {
        for (var z = -HALF_COUNT; z < HALF_COUNT; z++) {
            var circle = new THREE.Mesh( circleGeo, material );
            //scene.add( cube );
            circle.position.x = x * 10;
            circle.position.y = y * 10;
            circle.position.z = z * 10;
            scene.add( circle );
        };

    };



};
camera.position.z = 25;

var controls = window.controls = new THREE.OrbitControls( camera );

var light1 = new THREE.DirectionalLight( 0xffffff );
light1.position.set( 1, 1, 1 );
scene.add( light1 );
var light2 = new THREE.DirectionalLight( 0xcccccc );
light2.position.set( -10, -10, -10 );
scene.add( light2 );

var amblight = new THREE.AmbientLight( 0x222222 );
scene.add( amblight );



var getRandomHexColor = function() {
  return '0x' + Math.floor(Math.random()*16777215).toString();
}

var render = function () {
  //cube.material.color.setHex(getRandomHexColor());
  renderer.render( scene, camera );
};

setInterval(function() {
    circle.material.color.setHex(getRandomHexColor());
    render();
}, 100);

controls.addEventListener( 'change', render );
render();
