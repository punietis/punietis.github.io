import React from 'react';

// import css module for facility card info
import styles from './result-section.module.css';

function FullHours(props) {
	var timeStyle;
	// changes style of weekday+hour block depending on if it's today
	props.today ? (timeStyle = styles.todayFullTime) : (timeStyle = styles.fullTime);

	// console.log("props.hours in full hours");
	// console.log(props);

	const FullHourList = props.hours.map((hour) => <p className={styles.shorthandHour}>{hour}</p>);

	return (
		<div className={timeStyle}>
			<p className={styles.weekDay}>{props.weekDay}</p>
			<div className={styles.shorthandHours}>{FullHourList}</div>
		</div>
	);
}

export default FullHours;
