function makeFortress( radiusTop, radiusBottom, height ) {

	var geometry = new THREE.CylinderGeometry( radiusTop, radiusBottom, height, 10, 8 );

	for ( var i = 0; i < geometry.vertices.length; i++ ) {

		var vertex = geometry.vertices[i];

		vertex.x += 50 * Math.random();
		vertex.y += 50 * Math.random();
		vertex.z += 50 * Math.random();

	}

	return geometry;

}

function addFortress( scene, objects ) {

	var geometry = new THREE.Geometry();
	var geometry1;

	geometry1 = makeFortress( 300, 100, 300 );
	geometry.merge( geometry1 );

	geometry1 = makeFortress( 250, 50, 200 );
	geometry1.translate( -540, 50, 0 );
	geometry.merge( geometry1 );

	geometry1 = makeFortress( 150, 50, 500 );
	geometry1.translate( -300, -100, 300 );
	geometry.merge( geometry1 );

	addVertexColors( geometry.faces, 0.1, 0.3, 0.96, 0.4, 0.1 );

	material = new THREE.MeshLambertMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

	var mesh = new THREE.Mesh( geometry, material );
	mesh.position.set( 1000, 700, -230 );
	scene.add( mesh );

	objects.push( mesh );

}