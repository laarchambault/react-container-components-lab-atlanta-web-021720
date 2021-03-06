import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

export default class LatestMovieReviewContainer extends Component {
    state = {
        reviews: []
    }

    componentDidMount = () => {
        fetch(URL)
        .then(r => r.json())
        .then(movieData => {
            // console.log(movieData)
            this.setState({reviews: movieData.results})
        })
    }
    
    render() {
        return(
            <div className="latest-movie-reviews">
                <h1>Reviews from Latest Movies</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}
