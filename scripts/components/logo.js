function addLogo( scene, objects ) {

	var loader = new THREE.FontLoader();

	loader.load( 'scripts/MontserratHairline.json', function ( font ) {

		var geometry1 = new THREE.TextGeometry( 'TERRA', {

			font: font,
			size: 25,
			height: 15,
			curveSegments: 1

		} );

		geometry1.rotateY( Math.PI / 4 );
		geometry1.translate( 0, 27, 0 );

		var geometry2 = new THREE.TextGeometry( 'TECHNICA', {

			font: font,
			size: 25,
			height: 15,
			curveSegments: 1

		} );

		geometry2.rotateY( Math.PI / 4 );

		geometry1.merge( geometry2 );

		addVertexColors( geometry1.faces, 0.94, 0.05, 1, 0.45, 0.1 );

		var material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		var mesh = new THREE.Mesh( geometry1, material );
		mesh.position.set( -50, 0, -75 );
		scene.add( mesh );

		objects.push( mesh );

		var spotLight = new THREE.SpotLight( 0xffffff, 1, 2000, Math.PI / 6, 1, 2 );
		spotLight.position.set( 300, 100, -100 );
		spotLight.target = mesh;

		scene.add( spotLight );

	} );

}
