function addStaircase( scene, objects ) {

	var geometry, mesh, material;
	var geometry1, i;
	var angle = 0;

	geometry = new THREE.Geometry();

	for ( i = 0; i < 1000; i++ ) {

		angle += 0.1;

		geometry1 = new THREE.BoxGeometry( 60, 1, 60 );
		geometry1.rotateY( angle );
		geometry1.translate( 60 * Math.cos( angle ), 0.5 + i, 60 * Math.sin( angle ) );

		geometry.merge( geometry1 );

	}

	addVertexColors( geometry.faces, 0, 0.05, 0.67, 0.43, 0.05 );

	material = new THREE.MeshLambertMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 400, 0, -450 );
	scene.add( mesh );

	objects.push( mesh );

}
