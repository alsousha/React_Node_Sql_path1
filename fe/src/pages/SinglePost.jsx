import React from 'react'
import { useLocation } from 'react-router-dom';
import { API_URL } from '../constans';

function SinglePost() {
	const location = useLocation();
	//get post data from MainPage
	const item = location.state?.post;
	console.log(item);
  return (
	<div className="container">
		<div className='post'>
			<img src={`${API_URL}/uploads/${item.post_img}`} alt='art_icon' className='art__icon' />
			<div className='text'>
				<h2 className='mb2'>{item.post_title}</h2>
				<div className="post_text">{item.post_text}</div>
			</div>
		</div>
	</div>
	 
  )
}

export default SinglePost
