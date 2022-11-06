import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviews } from 'services/api';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { movieId } = useParams();

  useEffect(() => {
    const fetchReviewsMovies = async () => {
      try {
        const data = await GetReviews(movieId);
        setReviews(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchReviewsMovies();
  }, [movieId]);

  const elements = reviews.map(({ id, author, content }) => (
    <li key={id}>
      <p>
        <b>Author: {author}</b>
      </p>
      <p>{content}</p>
    </li>
  ));

  return reviews.length > 0 ? (
    <ul> {elements} </ul>
  ) : (
    <p>We don't have any reviews for this movie</p>
  );
};

export default Reviews;
