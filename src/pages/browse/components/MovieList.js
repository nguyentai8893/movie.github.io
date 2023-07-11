import React, { useState } from 'react';
import ListItem from './ListItem';
import classes from './MovieList.module.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';
import MovieDetail from '../MovieDetail';

const MovieList = ({ data }) => {
	const [isShowModal, setIsShowModal] = useState(false);
	const [item, setItem] = useState();
	const [id, setId] = useState(null);
	const classname = true;
	let list;
	if (data) {
		list = data.results;
	}
	const settings = {
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 10,
		slidesToScroll: 7,
		arrows: false,
	};
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
		<>
			<div className={classes.container}>
				<Slider {...settings}>
					{list &&
						list.map((item, index) => {
							return (
								<ListItem key={index} item={item} onCallBack={handlerDetail} />
							);
						})}
				</Slider>
			</div>

			{isShowModal && <MovieDetail item={item} onClose={handlerClose} />}
		</>
	);
};

export default MovieList;
