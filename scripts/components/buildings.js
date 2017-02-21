function addBuildings( scene, objects ) {

	var geometry = new THREE.Geometry();
	var geometry1;

	for ( var i = 0; i < 5; i++ ) {

		for (var j = 0; j < 5; j++ ) {

			var height = Math.random() * 200 + 100;
			geometry1 = new THREE.BoxGeometry( Math.random() * 20 + 40, height, Math.random() * 20 + 40);
			geometry1.translate( j * 80, height / 2, i * 80 );

			geometry.merge( geometry1 );

		}

	}

	addVertexColors( geometry.faces, 0.45, 0.05, 0.85, 0.5, 0.05 );

	material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( -800, 0, 0 );
	scene.add( mesh );

	objects.push( mesh );

}