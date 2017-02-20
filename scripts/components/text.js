function makeText( text, font ) {

	text = text.split(' ');
	
	var geometry = new THREE.Geometry();

	for ( var i = 0; i < text.length; i++ ) {

		var textGeometry = new THREE.TextGeometry( text[i], {

			font: font,
			size: 5,
			height: 5,
			curveSegments: 1

		} );

		textGeometry.translate( 0, ( text.length - i - 1 ) * 5, 0 );
		geometry.merge( textGeometry );

	}

	return geometry;

}

function makeHeadingText( text, font ) {

	var geometry = new THREE.TextGeometry( text, {

		font: font,
		size: 10,
		height: 5,
		curveSegments: 1

	} );
	
	return geometry;
}
