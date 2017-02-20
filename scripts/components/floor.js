function addFloor( scene, objects ) {

	var geometry = new THREE.PlaneGeometry( 2000, 2000, 100, 100 );
	geometry.rotateX( - Math.PI / 2 );

	var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

}
