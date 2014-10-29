'use strict';


var is = require('is');

var shapes = require('./shapes');
var utils = require('./utils');

var scene = new THREE.Scene();
var aspect = window.innerWidth / window.innerHeight;
var camera = new THREE.PerspectiveCamera( 75, aspect, 0.1, 1000 );
var renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


var COUNT = 5;
var RADIUS = 1;

var circles = [];

// console.log(new shapes.circle());

var circleGeo = new THREE.SphereGeometry( RADIUS, 32, 32 );
//var material = new THREE.MeshBasicMaterial({ wireframe: true, wireframeLinewidth: 5 });
var material = new THREE.MeshPhongMaterial({ wireframe: false, transparent: true, opacity: 0.8 });

var HALF_COUNT = COUNT / 2;



for (var x = -HALF_COUNT; x < HALF_COUNT; x++) {
    for (var y = -HALF_COUNT; y < HALF_COUNT; y++) {
        for (var z = -HALF_COUNT; z < HALF_COUNT; z++) {
            var circle = window.circle = new THREE.Mesh(circleGeo, material);
            circle.position.x = x * 20;
            circle.position.y = y * 20;
            circle.position.z = z * 20;
            circles.push(circle);
            scene.add(circle);
        }
    }
}

camera.position.z = 25;

// var light1 = new THREE.DirectionalLight( 0xffffff );
// light1.position.set( 1, 1, 1 );
// scene.add( light1 );

var light2 = new THREE.DirectionalLight( 0xcccccc );
light2.position.set( -100, -100, -100 );
scene.add( light2 );

var amblight = new THREE.AmbientLight( 0x222222 );
scene.add( amblight );


//var controls = new THREE.OrbitControls( camera );

var render = function () {
  camera.rotation += 0.1;
  //cube.material.color.setHex(getRandomHexColor());
  renderer.render( scene, camera );
  requestAnimationFrame(render);
};

setInterval(function() {

    circle.material.color.setHex(utils.getRandomHexColor());
    var rand = Math.random()*5;
    circles.forEach(function(c) {
        c.scale.x = rand;
        c.scale.y = rand;
        c.scale.z = rand;
    });
    render();
}, 500);

renderer();
