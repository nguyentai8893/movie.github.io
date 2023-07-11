import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import classes from './Browse.module.css';
import MovieCategory from './components/MovieCategory';

function Browse() {
	return (
		<div className={classes.app}>
			<Navbar />
			<Banner />
			<MovieCategory />
		</div>
	);
}

export default Browse;
