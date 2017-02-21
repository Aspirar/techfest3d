( function () {

	var scene = new THREE.Scene();

	var geometry = new THREE.SphereGeometry( 30, 20, 20 );

	for ( var i = 0; i < geometry.vertices.length; i++ ) {

		var vertex = geometry.vertices[i];
		vertex.x += Math.random() * 2 - 1;
		vertex.y += Math.random() *0.52;
		vertex.z += Math.random() * 2 - 1;

	}

	for ( var i = 0; i < geometry.faces.length; i++ ) {

		var face = geometry.faces[i];
		face.vertexColors[0] = new THREE.Color().setHSL( Math.random() * hrange + hlow, sval, Math.random() * vrange + vlow );
		face.vertexColors[1] = new THREE.Color().setHSL( Math.random() * hrange + hlow, sval, Math.random() * vrange + vlow );
		face.vertexColors[2] = new THREE.Color().setHSL( Math.random() * hrange + hlow, sval, Math.random() * vrange + vlow );

	}

	var material = new THREE.MeshBasicMaterial( {

		vertexColors: THREE.VertexColors,
		shading: THREE.FlatShading,
		side: THREE.DoubleSide

	} );

	var mesh = new THREE.Mesh( geometry, material );
	scene.add( mesh );

	var camera = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, 0.1, 1000 );
	camera.position.set( 0, 28, 15 );
	camera.lookAt( new THREE.Vector3( 0, 35, 0 ) );
	scene.add( camera );

	var renderer = new THREE.WebGLRenderer( { antialias: true, alpha: true } );
	renderer.setClearColor( new THREE.Color( 0xffffff ), 0 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.getElementById( 'sphere-container' ).appendChild( renderer.domElement );

	function animate() {

		mesh.rotation.x += 0.0005;
		mesh.rotation.y += 0.0005;
		mesh.rotation.z += 0.0005;

		requestAnimationFrame( animate );
		renderer.render( scene, camera );

	}
	animate();

	function onWindowResize() {

		camera.aspect = window.innerWidth / window.innerHeight;
		camera.updateProjectionMatrix();

		renderer.setSize( window.innerWidth, window.innerHeight );

	}
	window.addEventListener( 'resize', onWindowResize, false );

} () );
