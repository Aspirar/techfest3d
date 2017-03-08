function getTexture() {

	var canvas = document.createElement( 'canvas' );
	canvas.width = 16;
	canvas.height = 16;

	var context = canvas.getContext( '2d' );

	var gradient = context.createRadialGradient(

		canvas.width / 2,
		canvas.height / 2,
		0,
		canvas.width / 2,
		canvas.height / 2,
		canvas.width / 2

	);

	gradient.addColorStop( 0,   'rgba( 255, 255, 255, 1 )' );
	gradient.addColorStop( 0.2, 'rgba( 0, 255, 255, 1 )'   );
	gradient.addColorStop( 0.4, 'rgba( 0, 0, 64, 1 )'      );
	gradient.addColorStop( 1,   'rgba( 0, 0, 0, 1 )'       );

	context.fillStyle = gradient;
	context.fillRect( 0, 0, canvas.width, canvas.height );

	var texture = new THREE.Texture( canvas );
	texture.needsUpdate = true;
	return texture;

}

function createParticles( geometry ) {

	var material = new THREE.PointsMaterial( {

		color: 0xffffff,
		size: 3,
		transparent: true,
		blending: THREE.AdditiveBlending,
		map: getTexture(),

	} );

	var particles = new THREE.Points( geometry, material );
	particles.sortParticles = true;
	return particles;

}

function addParticles( scene ) {

	var geometry = new THREE.Geometry();
	var geometry1;

	var geometry1 = new THREE.PlaneGeometry( 600, 600, 60, 60 );
	geometry1.rotateX( -Math.PI / 2 );
	geometry1.translate( -50, 70, -750 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.TorusKnotGeometry( 20, 10, 100, 16, 1, 9 );
	geometry1.translate( 200, 50, 200 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.SphereGeometry( 50, 20, 20 );
	geometry1.translate( -100, 80, -100 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.TorusKnotGeometry( 100, 100, 150, 20, 7, 3 );
	geometry1.translate( -500, 100, 100 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.TorusKnotGeometry( 40, 40, 100, 10, 8, 9 );
	geometry1.translate( 300, 100, -400 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.TorusKnotGeometry( 40, 40, 100, 10, 8, 9 );
	geometry1.translate( -100, 100, 300 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.TorusKnotGeometry( 40, 40, 100, 10, 8, 9 );
	geometry1.translate( -50, 100, -750 );
	geometry.merge( geometry1 );

	geometry1 = new THREE.SphereGeometry( 100, 50, 50 );
	geometry1.translate( 500, 1000, -150 );
	geometry.merge( geometry1 );

	var particles = createParticles( geometry );
	scene.add( particles );

}
