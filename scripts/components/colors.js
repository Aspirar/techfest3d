function addVertexColors( faces, hlow, hrange, sval, vlow, vrange ) {

	for ( var i = 0; i < faces.length; i++ ) {

		var face = faces[i];
		face.vertexColors[0] = new THREE.Color().setHSL( Math.random() * hrange + hlow, sval, Math.random() * vrange + vlow );
		face.vertexColors[1] = new THREE.Color().setHSL( Math.random() * hrange + hlow, sval, Math.random() * vrange + vlow );
		face.vertexColors[2] = new THREE.Color().setHSL( Math.random() * hrange + hlow, sval, Math.random() * vrange + vlow );

	}

}
