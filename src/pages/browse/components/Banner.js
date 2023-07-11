import React, { useEffect, useState } from 'react';

import classes from './Banner.module.css';
import MoviewList from './MovieList';
import { API_KEY } from '../Api-key';

const Banner = () => {
	// khai báo biến state
	const [dataBackdrop, setDataBackdrop] = useState({});
	const [dataProps, setDataProps] = useState('');
	// call api
	useEffect(() => {
		const url = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_network=123`;
		const fetchApi = async () => {
			try {
				const res = await fetch(url);
				const data = await res.json();
				setDataBackdrop(
					data.results[Math.floor(Math.random() * data.results.length - 1)]
				);
				setDataProps(data);
			} catch (err) {
				console.log(err);
			}
		};
		fetchApi();
	}, []);
	// gán giá trị vào biến
	const backdrop_path = dataBackdrop.backdrop_path;
	return (
		<>
			<div className={classes.banner}>
				{backdrop_path && (
					<img
						className={classes.img}
						src={`https://image.tmdb.org/t/p/original${backdrop_path}`}
					/>
				)}

				<div className={classes.container}>
					<h2>{dataBackdrop.name}</h2>
					<div className={classes.dflex}>
						<button className={classes.btn}>Play</button>
						<button className={classes.btn}>My List</button>
					</div>
					<p className={classes.overview}>{dataBackdrop.overview}</p>
				</div>
			</div>
			{/* call comp  */}
			<MoviewList data={dataProps} />
		</>
	);
};

export default Banner;
