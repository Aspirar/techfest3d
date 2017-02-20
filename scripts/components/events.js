function addEvents( scene, objects, specialObjects ) {

	var loader = new THREE.FontLoader();

	loader.load( 'scripts/MontserratHairline.json', function ( font ) {
		
		var geometry, mesh, material;
		var text, userLink;

		geometry = makeHeadingText( 'EVENTS', font );

		material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -50, 0, -500 );
		scene.add( mesh );

		objects.push( mesh );

		var num = 7;
		var geometry2;

		for ( var i = 0; i < num; i++ ) {

			switch ( i ) {

				case 0:
					text = 'NITD Programming League';
					geometry2 = new THREE.BoxGeometry( 5, 5, 5 );
					userLink = 'nitdpl.html';
					break;

				case 1:
					text = 'Reverse Coding';
					geometry2 = new THREE.ConeGeometry( 5, 7, 8 );
					userLink = 'reverse-coding.html';
					break;

				case 2:
					text = 'Clash of Codes';
					geometry2 = new THREE.CylinderGeometry( 5, 5, 10, 8 );
					userLink = 'clash-of-codes.html';
					break;

				case 3:
					text = 'Hackathon';
					geometry2 = new THREE.DodecahedronGeometry( 5 );
					userLink = 'hackathon.html';
					break;

				case 4:
					text = 'Death Race';
					geometry2 = new THREE.IcosahedronGeometry( 5 );
					userLink = 'death-race.html';
					break;

				case 5:
					text = 'CodEmb';
					geometry2 = new THREE.OctahedronGeometry( 5 );
					userLink = 'codemb.html';
					break;

				case 6:
					text = 'Untangle the Tangle';
					geometry2 = new THREE.SphereGeometry( 5, 8, 8 );
					userLink = 'untangle.html';
					break;
			}

			geometry = makeText( text, font );

			material = new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } );

			mesh = new THREE.Mesh( geometry, material );
			var angle = i * 2 * Math.PI / num;
			mesh.position.set( - 50 + 150 * Math.cos( angle ), 0, - 500 + 150 * Math.sin( angle ) );
			mesh.rotation.y = -angle - Math.PI / 2	;
			mesh.userLink = userLink;
			scene.add( mesh );

			objects.push( mesh );
			specialObjects.push( mesh );

			material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

			mesh = new THREE.Mesh( geometry2, material );
			mesh.position.set( - 50 + 200 * Math.cos( angle ), 20, - 500 + 200 * Math.sin( angle ) );
			mesh.userLink = userLink;
			scene.add( mesh );

			objects.push( mesh );
			specialObjects.push( mesh );

		}

	} );

}
