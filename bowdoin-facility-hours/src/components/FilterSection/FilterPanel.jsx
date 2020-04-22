import React, { useState, useContext, forwardRef } from 'react';
import styles from './filter-section.module.css';

import FacilitiesData from '../../assets/facilities.json'; // master list of facilities data

import { DisplayedFacilityContext } from '../../DisplayedFacilityContext';
import { OpenFacilityContext } from '../../OpenFacilityContext';
import { InterestedFacilityContext } from '../../InterestedFacilityContext';

// import date picker library
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

// import tooltip library
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/translucent.css';

// import dropdown icon
import { GoTriangleDown } from 'react-icons/go';

let selectedFilters = [];
let filteredResults;

const FilterTag = (props) => {
	const [ selectedStatus, setSelectedStatus ] = useState(false);

	var displayStyle;
	selectedStatus ? (displayStyle = styles.selectedFilterTag) : (displayStyle = styles.filterTag);

	function toggleFilter() {
		/* if currently selected, remove from selected filter list */
		if (selectedStatus) {
			let tagIndex = selectedFilters.indexOf(props.filterName);
			selectedFilters.splice(tagIndex, 1);
		} else {
			/* if not selected yet, add to selected list*/
			selectedFilters.push(props.filterName);
		}

		setSelectedStatus(!selectedStatus);
		filterBy(selectedFilters);
		setDisplayedFacilities(filteredResults);
	}

	const [ displayedFacilities, setDisplayedFacilities ] = useContext(DisplayedFacilityContext);
	const [ openFacilities ] = useContext(OpenFacilityContext);
	const [ interestedFacilities ] = useContext(InterestedFacilityContext);

	function filterBy(selectedFilters) {
		filteredResults = FacilitiesData;

		for (var selectedFilter of selectedFilters) {
			if (selectedFilter === 'Open Now') {
				filteredResults = filteredResults.filter((facility) => {
					let matches = openFacilities.includes(facility.name);
					return matches;
				});
			} else if (selectedFilter === 'Food') {
				filteredResults = filteredResults.filter((facility) => {
					let matches = facility.filter.includes('food');
					return matches;
				});
			} else if (selectedFilter === 'Athletics') {
				filteredResults = filteredResults.filter((facility) => {
					let matches = facility.filter.includes('athletics');
					return matches;
				});
			} else if (selectedFilter === 'Academic') {
				filteredResults = filteredResults.filter((facility) => {
					let matches = facility.filter.includes('academic');
					return matches;
				});
			} else if (selectedFilter === 'Other') {
				filteredResults = filteredResults.filter((facility) => {
					let matches = facility.filter.includes('other');
					return matches;
				});
			} else if (selectedFilter === 'Interested') {
				filteredResults = filteredResults.filter((facility) => {
					let matches = interestedFacilities.includes(facility.name);
					return matches;
				});
			}
		}
	}

	return (
		<div onClick={toggleFilter}>
			<div>
				{/* <button className={styles.filterName} className={displayStyle} tabIndex={0}> */}
				<div className={styles.filterName} className={displayStyle}>
					{props.filterName}
				</div>
			</div>
		</div>
	);
};

// time picker using react-datepicker package
const OpenAtTimePicker = () => {
	const [ time, setTime ] = useState(new Date());
	// const CustomTimeInput = ({ value, onChange }) => (
	// 	<input
	// 		value={value}
	// 		onChange={(e) => onChange(e.target.value)}
	// 		style={{ border: 'solid 1px', borderRadius: '25px' }}
	// 	/>
	// );

	return (
		<div className={styles.calendarPopup}>
			<DatePicker
				selected={time}
				onChange={(date) => setTime(date)}
				timeInputLabel="Time :"
				// dateFormat="MM/dd hh:mm aa"
				showTimeInput
				inline
				// showPopperArrow={false}
				className={styles.timePicker}
			/>
		</div>
	);
};

const OpenAtFilterTag = () => {
	const [ selectedStatus, setSelectedStatus ] = useState(false);

	var displayStyle;
	selectedStatus ? (displayStyle = styles.selectedFilterTag) : (displayStyle = styles.filterTag);

	function toggleFilter() {
		// if currently selected, remove from selected filter list
		if (selectedStatus) {
			let tagIndex = selectedFilters.indexOf('Open At');
			selectedFilters.splice(tagIndex, 1);
		} else {
			// if not selected yet, add to selected list
			selectedFilters.push('Open At');
		}

		setSelectedStatus(!selectedStatus);

		console.log('!!!in toggleOpenAtFilter');
		console.log('selectedStatus: ' + selectedStatus);
	}

	function changeDropDownClicked(e) {
		e.stopPropagation();
		console.log('???in changeDropDownClicked');
	}

	return (
		<div onClick={toggleFilter}>
			{/* <button className={styles.filterName} className={displayStyle} tabIndex={0}> */}
			<div className={styles.filterName} className={displayStyle}>
				Open At
				{/* drop down with time picker tooltip */}
				{/* <div className={styles.dropDownWithToolTip} tabIndex={0} onClick={changeDropDownClicked}> */}
				<div className={styles.dropDownWithToolTip} onClick={changeDropDownClicked}>
					<Tippy
						content={<OpenAtTimePicker />}
						theme="translucent"
						trigger="click"
						interactive={true}
						// offset={[ 73, -12 ]}
						placement="bottom"
					>
						<div>
							<DropDownIcon selected={selectedStatus} />
						</div>
					</Tippy>
				</div>
			</div>
		</div>
	);
};

const DropDownIcon = (props) => {
	var displayStyle;
	props.selected ? (displayStyle = styles.selectedDropDownSVG) : (displayStyle = styles.dropDownSVG);
	return <GoTriangleDown className={displayStyle} />;
};

function FilterPanel() {
	return (
		<div>
			<div className={styles.filterSection}>
				<h1 className={styles.filterHeader}>Filter By</h1>
				<div className={styles.filterPanel}>
					<FilterTag filterName="Interested" />
					<FilterTag filterName="Open Now" />
					{/* <OpenAtFilterTag /> */}
					<FilterTag filterName="Food" />
					<FilterTag filterName="Athletics" />
					<FilterTag filterName="Academic" />
					<FilterTag filterName="Other" />
				</div>
			</div>
		</div>
	);
}

export default FilterPanel;
