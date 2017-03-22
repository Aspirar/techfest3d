function addEvents( scene, objects, specialObjects ) {

	var loader = new THREE.FontLoader();

	loader.load( 'scripts/MontserratHairline.json', function ( font ) {
		
		var geometry, mesh, material;
		var light;
		var text, userLink;

		geometry = makeHeadingText( 'EVENTS', font );

		addVertexColors( geometry.faces, 0.5, 0.2, 0.75, 0.3, 0.3 );

		material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

		mesh = new THREE.Mesh( geometry, material );
		mesh.position.set( -50, 0, -750 );
		scene.add( mesh );

		objects.push( mesh );

		light = new THREE.PointLight( 0xffffff, 3, 1200, 2 );
		light.position.set( -50, 20, -750 );
		scene.add( light );

		var num = 19;
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

				case 7:
					text = 'Puck Collect';
					geometry2 = new THREE.CylinderGeometry( 7, 4, 5, 5 );
					userLink = 'puckcollect.html';
					break;

				case 8:
					text = 'root@CTF';
					geometry2 = new THREE.BoxGeometry( 5, 5, 5 );
					userLink = 'capturetheflag.html';
					break;

				case 9:
					text = 'Design and Innovation';
					geometry2 = new THREE.ConeGeometry( 5, 7, 8 );
					userLink = 'design.html';
					break;

				case 10:
					text = 'NITD Expo';
					geometry2 = new THREE.CylinderGeometry( 5, 5, 10, 8 );
					userLink = 'expo.html';
					break;

				case 11:
					text = 'Innovatica';
					geometry2 = new THREE.DodecahedronGeometry( 5 );
					userLink = 'innovatica.html';
					break;

				case 12:
					text = 'Maze Runner';
					geometry2 = new THREE.IcosahedronGeometry( 5 );
					userLink = 'mazerunner.html';
					break;

				case 13:
					text = 'Youth Parliament';
					geometry2 = new THREE.OctahedronGeometry( 5 );
					userLink = 'parliament.html';
					break;

				case 14:
					text = 'Robo Rumble';
					geometry2 = new THREE.CylinderGeometry( 7, 4, 5, 5 );
					userLink = 'roborumble.html';
					break;

				case 15:
					text = 'Robo Soccer';
					geometry2 = new THREE.BoxGeometry( 5, 5, 5 );
					userLink = 'robosoccer.html';
					break;

				case 16:
					text = 'Robo Wars';
					geometry2 = new THREE.ConeGeometry( 5, 7, 8 );
					userLink = 'robowars.html';
					break;

				case 17:
					text = 'Virtual Stock Market';
					geometry2 = new THREE.CylinderGeometry( 5, 5, 10, 8 );
					userLink = 'stockmarket.html';
					break;

				case 18:
					text = 'Typotude';
					geometry2 = new THREE.DodecahedronGeometry( 5 );
					userLink = 'typotude.html';
					break;

			}

			geometry = makeText( text, font );

			addVertexColors( geometry.faces, 0, 0.1, 0.75, 0.25, 0.25 );

			material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors } );

			mesh = new THREE.Mesh( geometry, material );
			var angle = i * 2 * Math.PI / num;
			mesh.position.set( - 50 + 300 * Math.cos( angle ), 0, - 750 + 300 * Math.sin( angle ) );
			mesh.rotation.y = -angle - Math.PI / 2	;
			mesh.userLink = userLink;
			scene.add( mesh );

			objects.push( mesh );
			specialObjects.push( mesh );

			addVertexColors( geometry2.faces, 0, 0, 1, 0.4, 0.2 );

			material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

			mesh = new THREE.Mesh( geometry2, material );
			mesh.position.set( - 50 + 350 * Math.cos( angle ), 20, - 750 + 350 * Math.sin( angle ) );
			mesh.userLink = userLink;
			scene.add( mesh );

			objects.push( mesh );
			specialObjects.push( mesh );

		}

	} );

}
