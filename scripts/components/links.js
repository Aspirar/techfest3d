function makeDomeGeometry() {

	var geometry = new THREE.SphereGeometry( 65, 10, 10, 0, 1.5 * Math.PI, - Math.PI / 4, 0.75 * Math.PI );
	return geometry;

}

function makeDomes( scene, objects ) {

	var geometry = new THREE.Geometry();
	var geometry1, light;

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( Math.PI / 2 );
	geometry1.translate( 180, 0, -250 );
	geometry.merge( geometry1 );

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( Math.PI / 2 );
	geometry1.translate( 330, 0, -270 );
	geometry.merge( geometry1 );

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( Math.PI / 2 );
	geometry1.translate( 255, 0, -130 );
	geometry.merge( geometry1 );

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( 1.2 * Math.PI );
	geometry1.translate( -180, 0, -250 );
	geometry.merge( geometry1 );

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( 1.2 * Math.PI );
	geometry1.translate( -330, 0, -270 );
	geometry.merge( geometry1 );

	geometry1 = makeDomeGeometry();
	geometry1.rotateY( 1.2 * Math.PI );
	geometry1.translate( -255, 0, -130 );
	geometry.merge( geometry1 );

	addVertexColors( geometry.faces, 0.3, 0.2, 0.92, 0.3, 0.1 );

	material = new THREE.MeshLambertMaterial( {

		vertexColors: THREE.VertexColors,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide
		
	} );

	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	objects.push( mesh );

	light = new THREE.PointLight( 0xffffff, 3, 800, 2 );
	light.position.set( 250, 50, -200 );
	scene.add( light );
	
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

		geometry = makeHeadingText( 'EXHIBITIONS', font );
		geometry.rotateY( - Math.PI / 4 );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.userLink = 'exhibitions.html';
		mesh.position.set( 200, 0, -135 );
		scene.add( mesh );

		objects.push( mesh );
		specialObjects.push( mesh );

		geometry = makeHeadingText( 'SPONSORS', font );
		geometry.rotateY( Math.PI / 2 );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.userLink = 'sponsors.html';
		mesh.position.set( -137, 0, -203 );
		scene.add( mesh );

		objects.push( mesh );
		specialObjects.push( mesh );

		geometry = makeHeadingText( 'CONTACT', font );
		geometry.rotateY( Math.PI / 2 );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.userLink = 'contact.html';
		mesh.position.set( -216, 0, -96 );
		scene.add( mesh );

		objects.push( mesh );
		specialObjects.push( mesh );

		geometry = makeHeadingText( 'SPEAKERS', font );
		geometry.rotateY( Math.PI / 2 );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.userLink = 'speakers.html';
		mesh.position.set( -288, 0, -230 );
		scene.add( mesh );

		objects.push( mesh );
		specialObjects.push( mesh );

	} );

}
