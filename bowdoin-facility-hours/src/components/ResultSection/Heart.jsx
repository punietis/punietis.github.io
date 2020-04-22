import React, { useState, useContext } from 'react';
import styles from './result-section.module.css';
import { InterestedFacilityContext } from '../../InterestedFacilityContext';

function Heart(props) {
	const [ favoriteStatus, setFavoriteStatus ] = useState(false);
	const [ interestedFacilities, setInterestedFacilities ] = useContext(InterestedFacilityContext);

	var fillStyle;

	interestedFacilities.includes(props.name) ? (fillStyle = styles.filledHeart) : (fillStyle = styles.unfilledHeart);

	function changeFavoriteStatus() {
		setFavoriteStatus(!favoriteStatus);

		/* if is not part of the favorited list yet, then add it to the list*/
		if (!interestedFacilities.includes(props.name)) {
			interestedFacilities.push(props.name);
			setInterestedFacilities(interestedFacilities);
			// console.log('added to hearts!');
		} else {
			/* if it's already favorited, toggling it means taking it off the favorites list*/
			// console.log('trying to remove');

			let facilityIndex = interestedFacilities.indexOf(props.name);
			// console.log(facilityIndex);
			interestedFacilities.splice(facilityIndex, 1);
			// console.log(interestedFacilities);
		}
	}

	return (
		// <button onClick={changeFavoriteStatus} tabIndex={0} className={styles.heartWrapper}>

		<div onClick={changeFavoriteStatus} className={styles.heartWrapper}>
			<svg className={fillStyle} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
				<path d="M12 4.419c-2.826-5.695-11.999-4.064-11.999 3.27 0 7.27 9.903 10.938 11.999 15.311 2.096-4.373 12-8.041 12-15.311 0-7.327-9.17-8.972-12-3.27z" />
			</svg>
		</div>
	);
}

export default Heart;
