function makeDomeGeometry() {

	var geometry = new THREE.SphereGeometry( 60, 10, 10, 0, 1.5 * Math.PI, - Math.PI / 4, 0.75 * Math.PI );
	return geometry;

}

function makeDomes( scene, objects ) {

	var geometry = new THREE.Geometry();
	var geometry1, light;

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( Math.PI / 2 );
	geometry1.translate( 180, 0, -250 );
	geometry.merge( geometry1 );

	light = new THREE.PointLight( 0xffffff, 2, 200, 2 );
	light.position.set( 180, 20, -250 );
	scene.add( light );

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( Math.PI / 2 );
	geometry1.translate( 330, 0, -270 );
	geometry.merge( geometry1 );

	light = new THREE.PointLight( 0xffffff, 2, 200, 2 );
	light.position.set( 330, 20, -270 );
	scene.add( light );

	addVertexColors( geometry.faces, 0.3, 0.2, 0.92, 0.3, 0.1 );

	material = new THREE.MeshLambertMaterial( {

		vertexColors: THREE.VertexColors,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide
		
	} );

	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	objects.push( mesh );
	
}

function addLinks( scene, objects, specialObjects ) {

	makeDomes( scene, objects );

	var geometry, mesh, material;
	var geometry2;
	
	var loader = new THREE.FontLoader();

	loader.load( 'scripts/MontserratHairline.json', function ( font ) {

		geometry = makeHeadingText( 'ABOUT', font );
		geometry.rotateY( - Math.PI / 4 );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.userLink = 'about.html';
		mesh.position.set( 150, 0, -250 );
		scene.add( mesh );

		objects.push( mesh );
		specialObjects.push( mesh );

		geometry = makeHeadingText( 'INITIATIVES', font );
		geometry.rotateY( - Math.PI / 4 );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.userLink = 'initiatives.html';
		mesh.position.set( 300, 0, -300 );
		scene.add( mesh );

		objects.push( mesh );
		specialObjects.push( mesh );

	} );

}
