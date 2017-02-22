function addCirclePattern( scene, objects ) {

	var geometry = new THREE.Geometry();
	var geometry1, angle;

	for ( var i = 0; i < 8; i++ ) {

		angle = i * 2 * Math.PI / 8;

		geometry1 = new THREE.CylinderGeometry( 30, 30, 50, 10, 4, true, 0, Math.PI );
		geometry1.rotateY( angle - Math.PI / 2 );
		geometry1.translate( 72 * Math.sin( angle ), 25, 72 * Math.cos( angle ) );

		geometry.merge( geometry1 );

	}

	addVertexColors( geometry.faces, 0.7, 0.05, 0.38, 0.3, 0.05 );

	material = new THREE.MeshPhongMaterial( {

		vertexColors: THREE.VertexColors,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide
		
	} );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 200, 0, 200 );
	scene.add( mesh );

	var light = new THREE.PointLight( 0xffffff, 3, 400, 2 );
	light.position.set( 200, 30, 200 );
	scene.add( light );

	light = new THREE.PointLight( 0xffffff, 2, 400, 2 );
	light.position.set( 92, 30, 114 );
	scene.add( light );

}
