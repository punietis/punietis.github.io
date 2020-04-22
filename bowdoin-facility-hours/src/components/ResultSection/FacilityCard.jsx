import React, { forwardRef, useContext } from 'react';

// import tooltip library
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

// import css module for facility card
import styles from './result-section.module.css';

// import components that make up facility card
import FacilityCardBase from './FacilityCardBase';
import FullHours from './FullHours';

import { OpenFacilityContext } from '../../OpenFacilityContext';

function isToday(weekDays) {
	var now = new Date().getDay(); // get today's day
	var isToday = false;

	// var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
	// the 0 to 6 used in the switch corresponds to indexes in ^ array

	// checking if any one of weekday === today
	switch (weekDays) {
		case 'Sun':
			now === 0 ? (isToday = true) : (isToday = false);
			break;
		case 'Mon':
			now === 1 ? (isToday = true) : (isToday = false);
			break;
		case 'Tue':
			now === 2 ? (isToday = true) : (isToday = false);
			break;
		case 'Wed':
			now === 3 ? (isToday = true) : (isToday = false);
			break;
		case 'Thu':
			now === 4 ? (isToday = true) : (isToday = false);
			break;
		case 'Fri':
			now === 5 ? (isToday = true) : (isToday = false);
			break;
		case 'Sat':
			now === 6 ? (isToday = true) : (isToday = false);
			break;
		case 'Mon-Fri':
			now !== 0 && now !== 6 ? (isToday = true) : (isToday = false);
			break;
		case 'Sat-Sun':
			now === 0 || now === 6 ? (isToday = true) : (isToday = false);
			break;
		case 'Every day':
			isToday = true;
			break;
		case 'Mon-Sun':
			isToday = true;
			break;
		default:
			break;
	}
	return isToday;
}

function FacilityCard(props) {
	const [ openFacilities, setOpenFacilities ] = useContext(OpenFacilityContext);

	// create tool tip containing full hour info
	const FullHourTooltip = (props) => {
		const shorthandHoursArray = props.shorthandHours;
		return (
			<div className={styles.tooltipHours}>
				{shorthandHoursArray.map((shorthandHoursArray) => {
					return (
						<FullHours
							key={shorthandHoursArray.id}
							weekDay={shorthandHoursArray.weekDays}
							hours={shorthandHoursArray.hours}
							today={isToday(shorthandHoursArray.weekDays)}
						/>
					);
				})}
			</div>
		);
	};

	let [ openStatus, changeTime ] = isOpen(props);

	/* if this facility is open, then add it to the list of open facilities*/
	if (openStatus) {
		openFacilities.push(props.name);
		setOpenFacilities(openFacilities);
	}

	// link tooltip with facility card base
	const CardwithTooltip = forwardRef((props, ref) => {
		return (
			<div>
				{/* <button className={styles.clickable} ref={ref} tabIndex={0}> */}
				<div className={styles.clickable} ref={ref}>
					<FacilityCardBase
						name={props.name}
						hours={props.hours}
						favorite={props.favorite}
						openStatus={openStatus}
						changeTime={changeTime}
					/>
				</div>
			</div>
		);
	});

	return (
		// make a facility card with info and tooltip when user clicks
		<div>
			<Tippy
				content={<FullHourTooltip shorthandHours={props.shorthandHours} today={props.today} />}
				theme="light"
				interactive={true}
				offset={[ 9, 15 ]}
			>
				<CardwithTooltip name={props.name} hours={props.hours} favorite={props.favorite} />
			</Tippy>
		</div>
	);
}

function isOpen(props) {
	let date = new Date();

	let weekday = date.getDay();

	let todaysHours = undefined;

	switch (weekday) {
		case 0:
			todaysHours = props.hours.sunday;
			break;
		case 1:
			todaysHours = props.hours.monday;
			break;
		case 2:
			todaysHours = props.hours.tuesday;
			break;
		case 3:
			todaysHours = props.hours.wednesday;
			break;
		case 4:
			todaysHours = props.hours.thursday;
			break;
		case 5:
			todaysHours = props.hours.friday;
			break;
		case 6:
			todaysHours = props.hours.saturday;
			break;
		default:
			break;
	}

	let currHour = date.getHours();
	let currMin = date.getMinutes();
	let stringMinutes = (currMin < 10 ? '0' : '') + currMin.toString();
	let stringTime = currHour.toString() + stringMinutes;

	// open = true, closed = false
	let status = false;
	let changeTime = undefined;

	// console.log("TODAY'S HOURS");
	// console.log(todaysHours);

	// array length 1 - only one time set specified
	// e.g. open 9-5 (as opposed to 9-12 and 1-5)
	if (todaysHours.length === undefined) {
		let openTime = todaysHours.open;

		if (openTime === '24hrs') {
			return [ true, 'all day today' ];
		} else if (openTime === 'closed') {
			return [ false, 'all day today' ];
		}

		openTime = parseInt(todaysHours.open);
		let closeTime = parseInt(todaysHours.close);
		let intTime = parseInt(stringTime);

		console.log('current time ' + intTime);
		console.log('open time ' + openTime);
		console.log('close time ' + closeTime);

		// account for facilities that close past midnight
		if (closeTime <= 300) {
			closeTime += 2400;
		}

		if (intTime <= openTime) {
			status = false;
			changeTime = todaysHours.open;
		} else if (openTime <= intTime && closeTime >= intTime) {
			status = true;
			changeTime = todaysHours.close;
		} else {
			return [ false, 'for the day' ];
		}
	} else {
		// facilities with multiple sets of hours in one day
		// e.g. dining halls with breakfast, lunch, dinner

		for (let i = 0; i < todaysHours.length; i++) {
			let openTime = parseInt(todaysHours[i].open);
			let closeTime = parseInt(todaysHours[i].close);
			let intTime = parseInt(stringTime);

			console.log('current time ' + intTime);
			console.log('open time ' + openTime);
			console.log('close time ' + closeTime);

			// account for facilities that close past midnight
			if (closeTime <= 300) {
				closeTime += 2400;
			}

			// before first block, will open later
			if (i === 0) {
				if (intTime < openTime) {
					status = false;
					changeTime = todaysHours[i].open;
				}
			}

			// open at current time
			if (openTime <= intTime && closeTime >= intTime) {
				status = true;
				changeTime = todaysHours[i].close;
				break;

				// closed now, will open in next time block
			} else if (
				i + 1 < todaysHours.length &&
				closeTime <= intTime &&
				parseInt(todaysHours[i + 1].open) >= intTime
			) {
				status = false;
				changeTime = todaysHours[i + 1].open;
				break;

				// closed for the day
			} else if (i + 1 >= todaysHours.length && intTime >= closeTime) {
				status = false;
				changeTime = 'for the day';
				break;
			}
		}
	}

	console.log('Change time' + changeTime);

	if (changeTime === 'until tomorrow') {
		return [ status, changeTime ];
	}

	let hour = changeTime.slice(0, 2);
	let minute = changeTime.slice(2, 4);

	let am = true;
	// 24 hour to 12 hour time
	if (parseInt(hour) >= 13) {
		am = false;
		hour = (parseInt(hour) - 12).toString();
	} else if (parseInt(hour) === 0) {
		hour = '12';
	}

	// 06:30 -> 6:30
	if (hour.slice(0, 1) === '0') {
		hour = hour.slice(1, 2);
	}

	changeTime = hour + ':' + minute;

	let toReturn = 'until ' + changeTime + ' ';

	am ? (toReturn += 'AM') : (toReturn += 'PM');

	return [ status, toReturn ];
}

export default FacilityCard;
