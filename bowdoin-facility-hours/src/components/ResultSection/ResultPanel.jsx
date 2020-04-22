import React, { useContext } from 'react';
import FacilityCard from './FacilityCard';
import styles from './result-section.module.css';
import { DisplayedFacilityContext } from '../../DisplayedFacilityContext';

function ResultPanel() {
	const [ DisplayedFacilities ] = useContext(DisplayedFacilityContext);

	return (
		<div>
			<h1 className={styles.resultsHeader}>Results</h1>

			<div className={styles.resultPanel}>
				<div className={styles.scrollBar}>
					<div className={styles.cardPanel}>
						{DisplayedFacilities.map((DisplayedFacilities) => {
							return (
								<FacilityCard
									key={DisplayedFacilities.id}
									name={DisplayedFacilities.name}
									favorite={DisplayedFacilities.favorite}
									hours={DisplayedFacilities.hours}
									shorthandHours={DisplayedFacilities.shorthandHours}
								/>
							);
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default ResultPanel;
