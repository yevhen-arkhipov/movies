import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { GetReviews } from 'services/api';

import {
  ReviewsList,
  ReviewsItem,
  ReviewsText,
  ReviewsError,
} from './Reviews.styled';

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
    <ReviewsItem key={id}>
      <ReviewsText>
        <b>Author: </b>
        {author}
      </ReviewsText>
      {content}
    </ReviewsItem>
  ));

  return reviews.length > 0 ? (
    <ReviewsList> {elements} </ReviewsList>
  ) : (
    <ReviewsError>We don't have any reviews for this movie</ReviewsError>
  );
};

export default Reviews;
