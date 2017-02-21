function addSky( scene ) {

	var geometry = new THREE.SphereGeometry( 2000, 25, 25 );

	var texture = new THREE.TextureLoader().load( 'assets/images/space.jpg' );

	var material = new THREE.MeshPhongMaterial( {

		map: texture,
		side: THREE.BackSide,
		fog: false

	} );

	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

}
