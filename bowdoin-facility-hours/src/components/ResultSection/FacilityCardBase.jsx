import React from 'react';
import { Textfit } from 'react-textfit';

// import sub components that make up facility card base
import Heart from './Heart';
import FacilityCardInfo from './FacilityCardInfo';

// import css module for facility card
import styles from './result-section.module.css';

function FacilityCardBase(props) {
	// show different background color on card depending on status (open or closed)
	var cardStyle;
	props.openStatus ? (cardStyle = styles.open) : (cardStyle = styles.closed);

	return (
		<div className={cardStyle}>
			{/* facility name (self shrinking font) */}
			<Textfit mode="single" forceSingleModeWidth={false} className={styles.name}>
				{props.name}
			</Textfit>

			{/* heart component */}
			<div className={styles.heartWrapper}>
				<Heart name={props.name} />
			</div>

			{/* time info */}
			<div className={styles.info}>
				<FacilityCardInfo hours={props.hours} openStatus={props.openStatus} changeTime={props.changeTime} />
			</div>
		</div>
	);
}

export default FacilityCardBase;
