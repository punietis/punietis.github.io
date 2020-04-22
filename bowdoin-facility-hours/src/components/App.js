import React, { useState, useEffect } from 'react';
import Heading from './Heading';
import ResultPanel from './ResultSection/ResultPanel';
import SearchBar from './SearchSection/SearchBar';
import FilterPanel from './FilterSection/FilterPanel';

import styles from './main-page.module.css';

import { DisplayedFacilityProvider } from '../DisplayedFacilityContext';
import { OpenFacilityProvider } from '../OpenFacilityContext';
import { InterestedFacilityProvider } from '../InterestedFacilityContext';

function App() {
	return (
		<DisplayedFacilityProvider>
			<OpenFacilityProvider>
				<InterestedFacilityProvider>
					<div>
						<Heading />
						<SearchBar />

						<div className={styles.resultsAndFilterSection}>
							<div className={styles.resultSection}>
								<ResultPanel />
							</div>

							<div className={styles.filterSection}>
								<FilterPanel />
							</div>
						</div>
					</div>
				</InterestedFacilityProvider>
			</OpenFacilityProvider>
		</DisplayedFacilityProvider>
	);
}

export default App;
