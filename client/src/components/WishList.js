import React from 'react';
// import Container from "react-bootstrap/Container";

const MovieList = (props) => {
	const addToListComponent = props.addToListComponent;
	return (
		< >
			{props.results.map((show) => (
				<div>
					<div onClick={() => props.handleAddClick(show)}>
						<addToListComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;