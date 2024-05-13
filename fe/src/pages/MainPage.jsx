import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_URL } from '../constans';
import { Link } from 'react-router-dom';
import './pages.css'



function MainPage() {
	const [dataArray, setDataArray] = useState([]);
	 //fetch posts
	 const fetchData = async () => {
		try {
		  const res = await axios.get(`/posts`);
		  setDataArray(res.data);
		  console.log(res.data);
		} catch (err) {
		  console.log(err);
		}
	 };
	 useEffect(() => {
		fetchData();
	 }, []);
  return (
	 <div>
		<div className="container">
			
			<div className="posts">
			{dataArray &&
            dataArray.map((elem, i) => (
              <div key={'art-' + i} className='post-prev'>
                <Link
                  to={`/post/${elem.post_id}`}
                  state={{ post: elem }}
                  className={`art__item d-flex mt4 g2 ${i % 2 === 0 && 'f-reverce'}`}>
                  <img src={`${API_URL}/uploads/${elem.post_img}`} alt='art_icon' className='art__icon' />
                  <div className='text'>
                    <h2 className='mb2'>{elem.post_title}</h2>
                  </div>
                </Link>
              </div>
            ))}
			</div>
		
		</div>
	 </div>
  )
}

export default MainPage
