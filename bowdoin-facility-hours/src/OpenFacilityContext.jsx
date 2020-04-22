import React, { useState, createContext } from 'react';

export const OpenFacilityContext = createContext();

export const OpenFacilityProvider = (props) => {
	const [ openFacilities, setOpenFacilities ] = useState([]);
	return (
		<OpenFacilityContext.Provider value={[ openFacilities, setOpenFacilities ]}>
			{props.children}
		</OpenFacilityContext.Provider>
	);
};
