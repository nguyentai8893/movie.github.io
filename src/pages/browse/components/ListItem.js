import React from 'react';
import classes from './ListItem.module.css';

const ListItem = ({ item, onCallBack }) => {
	const handlerClickImg = () => {
		onCallBack(item);
	};
	return (
		<>
			<ul className={classes.list}>
				<li className={classes.listitem}>
					<img
						onClick={handlerClickImg}
						className={classes.image}
						src={`https://image.tmdb.org/t/p/original${item.poster_path}`}
					/>
				</li>
			</ul>
		</>
	);
};

export default ListItem;
