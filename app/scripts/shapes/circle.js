
var Circle = function(geometry, material) {

    if (!material) {
        material = new THREE.MeshBasicMaterial({ wireframe: true, wireframeLinewidth: 1 });
    }

    if (!geometry) {
        geometry = new THREE.SphereGeometry( 2, 32, 32 );
    }

    THREE.Mesh.call( this, geometry, material );

};

module.exports = Circle;
