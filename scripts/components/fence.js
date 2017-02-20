function makeFence() {

	var geometry = new THREE.Geometry();
	var geometry1, i;

	for ( i = 0; i < 100; i++ ) {

		geometry1 = new THREE.PlaneGeometry( 10, 10 );
		geometry1.rotateY( ( i % 2 === 0 ? -1 : 1 ) * Math.PI / 4 );
		geometry1.translate( i * 10 * Math.sin( Math.PI / 4 ), 5, 0 );
		geometry.merge( geometry1 );

	}

	return geometry;

}

function addFences( scene, objects ) {

	var geometry = makeFence();

	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true, side: THREE.DoubleSide } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.y = Math.PI / 2;
	mesh.position.set( -300, 0, -100 );
	scene.add( mesh );

	objects.push( mesh );

}
