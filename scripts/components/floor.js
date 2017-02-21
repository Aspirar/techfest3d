function addFloor( scene, objects ) {

	var geometry = new THREE.PlaneGeometry( 6000, 6000, 100, 100 );
	geometry.rotateX( - Math.PI / 2 );

	for ( var i = 0; i < geometry.vertices.length; i++ ) {

		var vertex = geometry.vertices[i];
		vertex.x += Math.random() * 20 - 10;
		vertex.z += Math.random() * 20 - 10;

	}

	addVertexColors( geometry.faces, 0.2, 0.3, 0.5, 0.1, 0.25 );

	var material = new THREE.MeshLambertMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

}
