import React from 'react';
import {Query} from 'react-apollo';
import {HOME_PAGE} from './queries';

const Home = () => (
    <Query query={HOME_PAGE}>
        {({ loading, error, data }) => {
            if (loading) return 'Loading...';
            if (error) return `Error! ${error.message}`;

            return (
                <div>
                    {data.movies.map(movie => (
                        <article key={movie.id}>
                            <h1>{movie.title}</h1>
                            <p>{movie.rating}</p>
                            <div>
                                <img src={movie.medium_cover_image} alt="" />
                            </div>
                        </article>
                    ))}
                </div>
            );
        }}
    </Query>
);

export default Home;