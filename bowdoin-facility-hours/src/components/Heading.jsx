import React from 'react';

const headingStyle = {
	color: 'white',
	textAlign: 'center',
	fontFamily: 'Montserrat',
	padding: '1rem',
	fontSize: '2.8rem',
	paddingBottom: '0',
	fontWeight: '400',
	margin: '1.8rem',
	paddingTop: '80px' // delete later after vertically aligning things right
};

function Heading() {
	return <h1 style={headingStyle}>Bowdoin Facilities Hours</h1>;
}

export default Heading;
