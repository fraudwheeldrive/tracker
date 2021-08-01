import React from 'react';
import Container from "react-bootstrap/Container";

const MovieList = (props) => {
	const addToListComponent = props.addToListComponent;
	return (
		<>
			{props.movies.map((movie, index) => (
				<div>
					<div onClick={() => props.handleAddClcik(movie)}>
						<addToListComponent />
					</div>
				</div>
			))}
		</>
	);
};

export default MovieList;