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
		mesh.position.set( -50, 0, -500 );
		scene.add( mesh );

		objects.push( mesh );

		light = new THREE.PointLight( 0xffffff, 3, 1200, 2 );
		light.position.set( -50, 20, -500 );
		scene.add( light );

		var num = 8;
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
			}

			geometry = makeText( text, font );

			addVertexColors( geometry.faces, 0, 0.1, 0.75, 0.25, 0.25 );

			material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors } );

			mesh = new THREE.Mesh( geometry, material );
			var angle = i * 2 * Math.PI / num;
			mesh.position.set( - 50 + 150 * Math.cos( angle ), 0, - 500 + 150 * Math.sin( angle ) );
			mesh.rotation.y = -angle - Math.PI / 2	;
			mesh.userLink = userLink;
			scene.add( mesh );

			objects.push( mesh );
			specialObjects.push( mesh );

			addVertexColors( geometry2.faces, 0, 0, 1, 0.4, 0.2 );

			material = new THREE.MeshPhongMaterial( { vertexColors: THREE.VertexColors, shading: THREE.FlatShading } );

			mesh = new THREE.Mesh( geometry2, material );
			mesh.position.set( - 50 + 200 * Math.cos( angle ), 20, - 500 + 200 * Math.sin( angle ) );
			mesh.userLink = userLink;
			scene.add( mesh );

			objects.push( mesh );
			specialObjects.push( mesh );

		}

	} );

}
