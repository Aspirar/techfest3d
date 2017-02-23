function makeHall() {

	var geometry1 = new THREE.CylinderGeometry( 50, 50, 2 );
	geometry1.translate( 0, 1, 0 );

	var geometry2 = new THREE.CylinderGeometry( 45, 45, 2 );
	geometry2.translate( 0, 3, 0 );
	geometry1.merge( geometry2 );

	for ( var i = 0; i < 8; i++ ) {

		geometry2 = new THREE.CylinderGeometry( 5, 5, 50 );
		var angle = i * 2 * Math.PI / 8;
		geometry2.translate( 40 * Math.cos( angle ), 29, 40 * Math.sin( angle ) );
		geometry1.merge( geometry2 );

	}

	geometry2 = new THREE.CylinderGeometry( 50, 50, 2 );
	geometry2.translate( 0, 55, 0 );
	geometry1.merge( geometry2 );

	return geometry1;

}

function addHalls( sene, objects ) {

	var num = 8;
	var light;

	var geometry = new THREE.Geometry();

	for ( var i = 0; i < num; i++ ) {

		var angle = i * 2 * Math.PI / num;
		var hallGeometry = makeHall();
		hallGeometry.translate( 200 * Math.cos( angle ), 0, 200 * Math.sin( angle ) );
		geometry.merge( hallGeometry );

		// light = new THREE.PointLight( 0xffffff, 3, 400, 2 );
		// light.position.set( -50 + 200 * Math.cos( angle ), 20, -500 + 200 * Math.sin( angle ) );
		// scene.add( light );

	}

	addVertexColors( geometry.faces, 0.1, 0.2, 0.25, 0.1, 0.1 );

	var material = new THREE.MeshLambertMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( -50, 0, -500 );
	scene.add( mesh );

	objects.push( mesh );

}
