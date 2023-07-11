import React, { useEffect, useState } from 'react';
import classes from './MovieDetail.module.css';
import ReactDOM from 'react-dom';
import YouTube from 'react-youtube';
import useHttp from '../../hooks/use-http';

import { API_KEY } from './Api-key';

const MovieDetail = ({ item, onClose }) => {
	const [movieVideo, setMovieVideo] = useState([]);
	// sử sụng hook useHttp custom
	const { isLoading, error, sendRequest: fetchMovie } = useHttp();

	const id = item.id;
	useEffect(() => {
		const tranfromMovie = (dataMovie) => {
			setMovieVideo(dataMovie.results);
		};
		fetchMovie(
			{
				url: `https://api.themoviedb.org/3/movie/${item.id}/videos?api_key=${API_KEY}`,
			},
			tranfromMovie
		);
	}, [id]);

	const opts = {
		height: '300',
		width: '98%',
		playerVars: {
			autoplay: 0,
		},
	};
	const video = movieVideo.find(
		(v) => v.site === 'YouTube' && v.type === 'Trailer'
	);
	return ReactDOM.createPortal(
		<>
			<div className={classes.container}>
				<div className={classes.modal}>
					<div className={classes.name}>
						{item.original_title ? (
							<h4>{item.original_title}</h4>
						) : (
							<h4>Movie</h4>
						)}
					</div>
					<div className={classes.date}>
						<p>release_date: {item.release_date}</p>
						<p>
							vote: {item.vote_count}/{item.vote_average}
						</p>
					</div>

					<p>{item.overview}</p>
					<button className={classes.btn} onClick={onClose}>
						Close
					</button>
				</div>
				<div className={classes.video}>
					{isLoading && <p style={{ color: '#fff' }}>Loading...</p>}

					{video ? (
						<YouTube videoId={video.key} opts={opts} />
					) : (
						<img
							className={classes.img}
							src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
						/>
					)}
				</div>
			</div>
		</>,
		document.getElementById('modal-root')
	);
};

export default MovieDetail;
