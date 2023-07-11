import React, { useEffect, useState } from 'react';
import classes from './MovieCategory.module.css';
import useHttp from '../../../hooks/use-http';
import MovieCategoryItem from './MovieCategoryItem';
import MovieDetail from '../MovieDetail';
import { API_KEY } from '../Api-key';
// khai báo endpoin
const requests = {
	fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
	fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
	fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
	fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
	fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
	fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
	fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
	fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
	fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};
// khai báo mảng các obj key title tương ứng endpoin
const categories = [
	{ title: `Xu hướng`, endpoin: requests.fetchTrending },
	{ title: `Xếp hạng cao`, endpoin: requests.fetchTopRated },
	{ title: `Hành động`, endpoin: requests.fetchTopRated },
	{ title: `Hài`, endpoin: requests.fetchComedyMovies },
	{ title: `Kinh dị`, endpoin: requests.fetchHorrorMovies },
	{ title: `Lãng mạn`, endpoin: requests.fetchRomanceMovies },
	{ title: `Tài liệu`, endpoin: requests.fetchDocumentaries },
];

const MovieCategory = () => {
	// khai báo biến state
	const [movie, setMovie] = useState([]);
	const [isShowModal, setIsShowModal] = useState(false);
	const [item, setItem] = useState();
	const [id, setId] = useState(null);

	const { isLoading, error, sendRequest: fetchMovie } = useHttp();

	useEffect(() => {
		const tranformMovie = (title, movieData) => {
			setMovie((state) => [
				...state,
				{ title: title, items: movieData.results },
			]);
		};
		// loop mảng lấy endpoin tương ứng với title
		for (const item of categories) {
			fetchMovie(
				{ url: `https://api.themoviedb.org/3${item.endpoin}` },
				tranformMovie.bind(null, item.title)
			);
		}
	}, [fetchMovie]);
	// hàm xử lý ẩn hiện detail
	const handlerDetail = (item) => {
		if (id !== item.id) {
			setIsShowModal(true);
			setId(item.id);
			setItem(item);
		} else {
			setIsShowModal(!isShowModal);
			setId(item.id);
		}
		console.log('id', item.id);
		console.log('item', item);
	};
	const handlerClose = () => {
		setIsShowModal(false);
	};
	return (
		<>
			{movie.map((item, i) => {
				return (
					<MovieCategoryItem key={i} {...item} onCallBack={handlerDetail} />
				);
			})}
			{isShowModal && <MovieDetail item={item} onClose={handlerClose} />}
		</>
	);
};

export default MovieCategory;
