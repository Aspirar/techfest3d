function addStaircase( scene, objects ) {

	var geometry, mesh, material;
	var geometry1, i;
	var angle = 0;

	geometry = new THREE.Geometry();

	for ( i = 0; i < 1000; i++ ) {

		angle += 0.1;

		geometry1 = new THREE.PlaneGeometry( 60, 10 );
		geometry1.rotateX( - Math.PI / 2 );
		geometry1.rotateY( angle );
		geometry1.translate( 60 * Math.cos( angle ), i, 60 * Math.sin( angle ) );

		geometry.merge( geometry1 );

	}

	material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true, side: THREE.DoubleSide } );

	mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 400, 0, -450 );
	scene.add( mesh );

	objects.push( mesh );

}
