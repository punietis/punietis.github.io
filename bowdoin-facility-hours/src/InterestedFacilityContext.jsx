import React, { useState, createContext } from 'react';

export const InterestedFacilityContext = createContext();

export const InterestedFacilityProvider = (props) => {
	const [ interestedFacilities, setInterestedFacilities ] = useState([]);
	return (
		<InterestedFacilityContext.Provider value={[ interestedFacilities, setInterestedFacilities ]}>
			{props.children}
		</InterestedFacilityContext.Provider>
	);
};
