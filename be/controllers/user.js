import { dbSingleton } from '../dbSingleton.js';

export const getPosts = (req, res) => {
	const q = 'SELECT * FROM posts';
 
	const db = dbSingleton.getInstance();
	db.query(q, (err, data) => {
	  if (err) return res.status(500).send(err);
 
	  return res.status(200).json(data);
	});
 };