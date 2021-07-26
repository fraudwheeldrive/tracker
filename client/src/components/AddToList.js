import React, {useState} from 'react';

class addToList {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
            movieData: [
                {
                    "MovieID": 1,
                    "MovieName": "Iron Man",
                    "LeadActor": "Robert Downey Jr.",
                    "LeadActress": "Gwyneth Paltrow",
                    "YearOfRelease": 2008,
                    "Language": "English"
                }
            ],
            movie: {}
        }
    }

    columns = ["MovieID", "MovieName", "LeadActor", "LeadActress", "YearOfRelease", "Language"];
    options = {
        filterType: "dropdown",
        responsive: "scroll"
    };

    handleChange = event => {
        this.name = event.target.name;
        this.value = event.target.value;
        this.setState(prevState => {
            return {
                movie: {
                    ...prevState.movie,
                    [this.name]: this.value
                }
            }
        });
    };

    handleSubmit = event => {
        event.preventDefault();

        let lastMovie = this.state.movieData[this.state.movieData.length -1];

        this.setState(prevState => {
            const movieData = prevState.movieData.concat({...prevState.movie, MovieID: lastMovie.MovieID + 1});
            return {
                movieData,
                movie: {},
            };
        });
    };

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-4'>
                        <form onSubmit={this.handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="MovieName">Movie Name</label>
                                <input type="text" name='MovieName' value={this.state.movie.MovieName}
                                       onChange={this.handleChange}
                                       className="form-control" id="MovieName"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="LeadActor">Lead Actor</label>
                                <input type="text" name='LeadActor' value={this.state.movie.LeadActor}
                                       onChange={this.handleChange} className="form-control" id="LeadActor"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="LeadActor">Lead Actress</label>
                                <input type="text" name='LeadActress' value={this.state.movie.LeadActress}
                                       onChange={this.handleChange} className="form-control" id="LeadActress"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="LeadActor">Year Of Release</label>
                                <input type="text" name='YearOfRelease' value={this.state.movie.YearOfRelease}
                                       onChange={this.handleChange} className="form-control" id="YearOfRelease"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="LeadActor">Language</label>
                                <input type="text" name='Language' value={this.state.movie.Language}
                                       onChange={this.handleChange} className="form-control" id="Language"/>
                            </div>
                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
                        {/* <MovieAPIData
                            title={"Movies"}
                            data={this.state.movieData}
                            columns={this.columns}
                            options={this.options}
                        /> */}
                    </div>
                </div>
            </div>
        );
    }
}
export default addToList;