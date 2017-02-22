var camera, scene, renderer;
var geometry, material, mesh;
var controls;

var orientationControls;

var objects = [];
var specialObjects = [];

var raycaster, clickraycaster;

var cameraLightSphere;
var cameraLight;

var container    = document.getElementById( 'container'    );
var blocker      = document.getElementById( 'blocker'      );
var instructions = document.getElementById( 'instructions' );
var clickButton  = document.getElementById( 'click-icon'   );
var jumpButton   = document.getElementById( 'jump-icon'    );

var havePointerLock = 'pointerLockElement'       in document
				   || 'mozPointerLockElement'    in document
				   || 'webkitPointerLockElement' in document;

var haveDeviceOrientation = 'onorientationchange' in window;

if ( havePointerLock ) {

	var element = document.body;

	var pointerlockchange = function ( event ) {

		if (   document.pointerLockElement       === element 
			|| document.mozPointerLockElement    === element
			|| document.webkitPointerLockElement === element ) {

			controlsEnabled = true;
			controls.enabled = true;

			blocker.style.display = 'none';

			document.addEventListener( 'mousedown', onMouseDown, false );

		} else {

			controls.enabled = false;

			blocker.style.display = '-webkit-flex';
			blocker.style.display =         'flex';

			document.removeEventListener( 'mousedown', onMouseDown, false );

		}

	};

	var pointerlockerror = function () {

		console.log( 'Pointer Lock Error' );

	};

	document.addEventListener(       'pointerlockchange', pointerlockchange, false );
	document.addEventListener(    'mozpointerlockchange', pointerlockchange, false );
	document.addEventListener( 'webkitpointerlockchange', pointerlockchange, false );

	document.addEventListener(       'pointerlockerror', pointerlockerror, false );
	document.addEventListener(    'mozpointerlockerror', pointerlockerror, false );
	document.addEventListener( 'webkitpointerlockerror', pointerlockerror, false );

	blocker.addEventListener( 'click', function ( event ) {

		element.requestPointerLock = element.requestPointerLock
								  || element.mozRequestPointerLock
								  || element.webkitRequestPointerLock;
		element.requestPointerLock();

	}, false );

} else if ( haveDeviceOrientation ) {

	blocker.style.display = 'none';

	clickButton.style.display = 'block';
	clickButton.addEventListener( 'click', onMouseDown, false );

	jumpButton.style.display = 'block';
	jumpButton.addEventListener( 'click', onJumpClicked, false );

} else {

	instructions.innerHTML = 'Your browser seems to be unsupported.';

}

function onMouseDown( event ) {

	clickraycaster.set( camera.getWorldPosition(), camera.getWorldDirection() );
	var intersections = clickraycaster.intersectObjects( specialObjects );

	if ( intersections.length > 0 ) {

		window.open( intersections[0].object.userLink );

	}

}

var controlsEnabled = false;
if ( haveDeviceOrientation ) {

	controlsEnabled = true;

}

var moveForward  = false;
var moveBackward = false;
var moveLeft     = false;
var moveRight    = false;
var canJump      = false;

var prevTime = performance.now();
var velocity = new THREE.Vector3();

function onJumpClicked( event ) {

	if ( canJump ) velocity.y += 300;
	canJump = false;

}

init();
animate();

function init() {

	camera = new THREE.PerspectiveCamera( 75,
										  window.innerWidth / window.innerHeight,
										  1,
										  4000 );

	//Crosshair

	geometry = new THREE.PlaneGeometry( 0.1, 0.1 );
	material = new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } );
	mesh = new THREE.Mesh( geometry, material );
	camera.add( mesh );
	mesh.position.set( 0, 0, -10 );

	scene = new THREE.Scene();
	scene.fog = new THREE.Fog( 0x020202, 0, 750 );

	var light = new THREE.HemisphereLight(0xeeeeff, 0x777788, 0.5);
	light.position.set(0.5, 1, 0.75);
	scene.add(light);

	controls = new THREE.PointerLockControls( camera );
	scene.add( controls.getObject() );

	//Camera Light

	cameraLight = new THREE.PointLight( 0xffffff, 5, 50, 2 );
	camera.add( cameraLight );


	if ( haveDeviceOrientation ) {

		orientationControls = new THREE.DeviceOrientationControls( camera );
		orientationControls.object.position.set( 0, 10, -180 );
		orientationControls.object.rotation.set( 0, -Math.PI / 4, 0 );

	}

	var onKeyDown = function ( event ) {

		switch ( event.keyCode ) {

			case 38:
			case 87:
				moveForward = true;
				break;

			case 37:
			case 65:
				moveLeft = true;
				break;

			case 40:
			case 83:
				moveBackward = true;
				break;

			case 39:
			case 68:
				moveRight = true;
				break;

			case 32:
				if ( canJump === true ) velocity.y += 300;
				canJump = false;
				break;

		}

	};

	var onKeyUp = function ( event ) {

		switch ( event.keyCode ) {

			case 38:
			case 87:
				moveForward = false;
				break;

			case 37:
			case 65:
				moveLeft = false;
				break;

			case 40:
			case 83:
				moveBackward = false;
				break;

			case 39:
			case 68:
				moveRight = false;
				break;

		}

	};

	document.addEventListener( 'keydown', onKeyDown, false );
	document.addEventListener( 'keyup'  , onKeyUp  , false );

	var onTouchStart = function () {

		moveForward = true;

	};

	var onTouchEnd = function () {

		moveForward = false;

	};

	container.addEventListener( 'touchstart', onTouchStart, false );
	container.addEventListener( 'touchend'  , onTouchEnd  , false );

	raycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, -1, 0 ), 0, 10 );
	clickraycaster = new THREE.Raycaster( new THREE.Vector3(), new THREE.Vector3( 0, 0, -1 ), 0, 100 );

	//Sky

	addSky( scene );

	//Floor

	addFloor( scene, objects );

	//Terra Technica Text

	addLogo( scene, objects );

	//Event Halls

	addHalls( scene, objects );

	//Events

	addEvents( scene, objects, specialObjects );

	//Staircase to Heaven

	addStaircase( scene, objects );

	//Navigation Links

	addLinks( scene, objects, specialObjects );

	//Fences

	addFences( scene, objects );

	//Staircase 2

	addStaircase2( scene, objects );

	//Circle Pattern

	addCirclePattern( scene, objects );

	//Buildings

	addBuildings( scene, objects );

	//Flying Fortresses

	addFortress( scene, objects );

	// //Particles

	addParticles( scene );

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setClearColor( 0xffffff );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	document.body.appendChild( renderer.domElement );

	window.addEventListener( 'resize', onWindowResize, false );

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

var angle = 0;
function animate() {

	requestAnimationFrame( animate );

	if ( controlsEnabled ) {

		var cam;

		if ( haveDeviceOrientation ) {

			orientationControls.update();
			cam = orientationControls.object;

		} else {

			cam = controls.getObject();

		}

		raycaster.ray.origin.copy( cam.position );
		raycaster.ray.origin.y -= 5;

		var intersections = raycaster.intersectObjects( objects );

		var isOnObject = intersections.length > 0;

		var time = performance.now();
		var delta = ( time - prevTime ) / 1000;

		if ( delta > 1 ) delta = 1 / 60;

		velocity.x -= velocity.x * 10.0 * delta;
		velocity.z -= velocity.z * 10.0 * delta;

		velocity.y -= 9.8 * 100.0 * delta;

		if ( haveDeviceOrientation && cam.position.y <= 10 && velocity.y < 100 ) {

			velocity.y = 0;

		}

		if ( moveForward )  velocity.z -= 400.0 * delta;
		if ( moveBackward ) velocity.z += 400.0 * delta;

		if ( moveLeft )  velocity.x -= 400.0 * delta;
		if ( moveRight ) velocity.x += 400.0 * delta;

		if ( isOnObject === true ) {

			velocity.y = Math.max( 0, velocity.y );

			if ( velocity.y == 0 ) {

				cam.position.y = intersections[0].point.y + 10;

			}

			canJump = true;

		}

		cam.translateX( velocity.x * delta );
		cam.translateY( velocity.y * delta );
		cam.translateZ( velocity.z * delta );

		if ( cam.position.y < 10 ) {

			velocity.y = 0;
			cam.position.y = 10;

			canJump = true;

		}

		prevTime = time;

	}

	renderer.render( scene, camera );

}
