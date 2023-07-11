import React, { memo, useEffect, useRef, useState } from 'react';
import classes from './SearchForm.module.css';
import useHttp from '../../../hooks/use-http';
import { API_KEY } from '../../browse/Api-key';
import MovieCategoryItem from '../../browse/components/MovieCategoryItem';
import MovieDetail from '../../browse/MovieDetail';

const SearchForm = () => {
	// khai báo state
	const [movieSearch, setMovieSearch] = useState([]);
	const [query, setQuery] = useState('');
	const [err, setErr] = useState('');
	const inputRef = useRef();
	const [title, setTitle] = useState(null);

	const [isShowModal, setIsShowModal] = useState(false);
	const [item, setItem] = useState();
	const [id, setId] = useState(null);
	const classname = true;

	const { isLoading, error, sendRequest: fetchMovie } = useHttp();
	// sử lí sự kiện click btn search
	const handlerSearch = () => {
		if (inputRef.current.value.trim() !== '') {
			setQuery(inputRef.current.value.trim());
			setTitle('Search Results ');
			setErr('');
			return;
		}
		if (inputRef.current.value.trim() === '') {
			setErr('vui lòng nhập từ khóa');
			setTitle('');
			return;
		}
	};

	useEffect(() => {
		const TransformSearch = (dataSearch) => {
			setMovieSearch(dataSearch.results);
		};

		fetchMovie(
			{
				url: `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}&language=en-US?api_key=${API_KEY}`,
			},
			TransformSearch
		);
	}, [query]);
	console.log(movieSearch);
	// Xử lý  show hiden detail
	const handlerDetail = (item) => {
		if (id !== item.id) {
			setIsShowModal(true);
			setId(item.id);
			setItem(item);
		} else {
			setIsShowModal(!isShowModal);
			setId(item.id);
		}
	};
	const handlerClose = () => {
		setIsShowModal(false);
	};
	return (
		<div className={classes.container}>
			<div className={classes.wraper}>
				<div className={classes.searchinput}>
					<input ref={inputRef} type='text' />
					{err && <p style={{ color: 'red' }}>{err}</p>}
					{error && <p style={{ color: 'red' }}>{error}</p>}
					<svg
						className='svg-inline--fa fa-search fa-w-16 '
						fill='#ccc'
						aria-hidden='true'
						data-prefix='fas'
						data-icon='search'
						role='img'
						xmlns='http://www.w3.org/2000/svg'
						viewBox='0 0 512 512'
					>
						<path d='M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z'></path>
					</svg>
				</div>
				<div className={classes.container_btn}>
					<button className={classes.btn}>RESET</button>
					<button className={classes.btn_search} onClick={handlerSearch}>
						SEARCH
					</button>
				</div>
			</div>
			<MovieCategoryItem
				items={movieSearch}
				title={title}
				classSearch={classname}
				onCallBack={handlerDetail}
			/>
			{isShowModal && <MovieDetail item={item} onClose={handlerClose} />}
		</div>
	);
};

export default memo(SearchForm);
