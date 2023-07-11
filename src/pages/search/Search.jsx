import React from 'react';
import Navbar from '../browse/components/Navbar';
import classes from './Search.module.css';
import SearchForm from './components/SearchForm';

const Search = () => {
	return (
		<div className={classes.app}>
			<Navbar />
			<SearchForm />
		</div>
	);
};

export default Search;
