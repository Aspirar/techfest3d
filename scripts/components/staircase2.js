function addStaircase2( scene, objects ) {

	var geometry = new THREE.Geometry();
	var geometry1;
	var angle = 0, radius = 20;

	for ( var i = 0; i < 500; i++ ) {

		angle += 0.1;
		radius += 0.5;

		geometry1 = new THREE.BoxGeometry( radius, 1, radius );
		geometry1.rotateY( angle );
		geometry1.translate( radius * Math.cos( angle ), 0.5 + i, radius * Math.sin( angle ) );

		geometry.merge( geometry1 );

	}

	var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( -100, 0, 300 );
	scene.add( mesh );

	objects.push( mesh );

}
