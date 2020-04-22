import React, { useState, useContext } from 'react';
import styles from './search-section.module.css'; // css styles for search section
import { FaSearch } from 'react-icons/fa'; // search icon
import FacilitiesData from '../../assets/facilities.json'; // master list of facilities data
import { DisplayedFacilityContext } from '../../DisplayedFacilityContext';

function SearchBar() {
	// import context to update list of facilities to display later
	const [ displayedFacilities, setDisplayedFacilities ] = useContext(DisplayedFacilityContext);

	// take in user inputted search keyword from the search bar
	const [ keyword, setKeyword ] = useState('');

	// update list of displayed facilities by filtering master list of facilities on user inputted keyword
	function updateResults(event) {
		const userInput = event.target.value;
		setKeyword(userInput);

		let searchResults = FacilitiesData.filter((displayedFacilities) => {
			let search = userInput.toLowerCase();

			let matchesName = displayedFacilities.name.toLowerCase().includes(search);

			let matchesAlternate = false;
			for (let alternateName of displayedFacilities.alternateNames) {
				if (alternateName.includes(search)) {
					matchesAlternate = true;
				}
			}

			let matchesTags = false;
			for (let tag of displayedFacilities.tags) {
				if (tag.includes(search)) {
					matchesTags = true;
				}
			}

			return matchesName || matchesTags || matchesAlternate;
		});

		setDisplayedFacilities(searchResults);
	}

	return (
		<div className={styles.searchSection}>
			<h1 className={styles.searchHeading}>What are you looking for?</h1>
			<div className={styles.searchBar}>
				<FaSearch className={styles.searchIcon} />
				<input
					type="text"
					placeholder="Try &quot;Thorne&quot;, &quot;Pool&quot;, etc."
					className={styles.searchBox}
					value={keyword}
					onChange={updateResults}
				/>
			</div>
		</div>
	);
}

export default SearchBar;
