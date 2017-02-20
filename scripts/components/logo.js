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

		var material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );

		var mesh = new THREE.Mesh( geometry1, material );
		mesh.position.set( -50, 0, -75 );
		scene.add( mesh );

		objects.push( mesh );

	} );

}
