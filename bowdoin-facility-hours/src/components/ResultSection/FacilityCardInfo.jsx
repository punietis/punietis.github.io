import React from 'react';

// import css module for facility card info
import styles from './result-section.module.css';

function FacilityCardInfo(props) {
	let openStatus = props.openStatus;
	let changeTime = props.changeTime;

	// console.log('Open status in FacilityCardInfo: ' + openStatus);

	return (
		<div>
			<p className={styles.status}>{openStatus ? 'Open' : 'Closed'}</p>
			<p className={styles.time}>{changeTime}</p>
		</div>
	);
}

export default FacilityCardInfo;
