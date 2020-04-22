import React, { useState, createContext } from 'react';
import FacilitiesData from './assets/facilities.json'; // master list of facilities data

export const DisplayedFacilityContext = createContext();

export const DisplayedFacilityProvider = (props) => {
	const [ displayedFacilities, setDisplayedFacilities ] = useState(FacilitiesData);
	return (
		<DisplayedFacilityContext.Provider value={[ displayedFacilities, setDisplayedFacilities ]}>
			{props.children}
		</DisplayedFacilityContext.Provider>
	);
};
