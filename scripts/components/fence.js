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
	addVertexColors( geometry.faces, 0.5, 0.3, 0.75, 0.25, 0.25 );

	var material = new THREE.MeshPhongMaterial( {

		vertexColors: THREE.VertexColors,
		side: THREE.DoubleSide,
		shading: THREE.FlatShading

	} );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.y = Math.PI / 2;
	mesh.position.set( -300, 0, -100 );
	scene.add( mesh );

	mesh = new THREE.Mesh( geometry, material );
	mesh.rotation.y = Math.PI / 4;
	mesh.position.set( 200, 0, 70 );
	scene.add( mesh );

}
