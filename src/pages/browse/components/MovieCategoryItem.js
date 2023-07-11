import React, { useState } from 'react';

import classes from './MovieCategoryItem.module.css';
import Slider from 'react-slick';

const MovieCategoryItem = ({ items, title, onCallBack, classSearch }) => {
	// cài đặt của thư viện slider
	const settings = {
		scroll: true,
		dots: false,
		infinite: true,
		speed: 800,
		slidesToShow: 7.8,
		slidesToScroll: 4.5,
		arrows: false,
	};

	const handlerClickImg = (item) => {
		onCallBack(item);
	};
	// gán class dựa trên giá trị của biến
	const searchclass = classSearch
		? classes.container + ' ' + classes.search
		: classes.container;
	const ulclass = classSearch
		? classes.list + ' ' + classes.list_item
		: classes.list;

	return (
		<>
			<div className={searchclass}>
				{title && <p className={classes.title}>{title}</p>}
				<Slider {...settings} className={classes.slider}>
					{items.map((item) => {
						return (
							<ul key={item.id} className={ulclass}>
								<li className={classes.listitem}>
									<img
										onClick={() => handlerClickImg(item)}
										className={classes.image}
										src={`https://image.tmdb.org/t/p/original${item.backdrop_path}`}
									/>
								</li>
							</ul>
						);
					})}
				</Slider>
			</div>
		</>
	);
};

export default MovieCategoryItem;
