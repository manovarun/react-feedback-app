import React, { useState, useContext, useEffect } from 'react';
import FeedbackContext from '../context/FeedbackContext';
import RatingSelect from './RatingSelect';
import Button from './shared/Button';
import Card from './shared/Card';

const FeedbackForm = () => {
  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(10);

  useEffect(() => {
    if (feedbackEdit.edit) {
      console.log(feedbackEdit);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleTextChange = (e) => {
    if (text === '') {
      setBtnDisabled(true);
      setMessage(null);
    } else if (text !== '' && text.trim().length <= 10) {
      setMessage('Text must be more than 10 characters long.');
      setBtnDisabled(true);
    } else {
      setMessage(null);
      setBtnDisabled(false);
    }

    setText(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (text.trim().length > 10) {
      const newFeedback = { text, rating };

      if (feedbackEdit.edit) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        <h2>How would you rate your service with us ?</h2>
        <RatingSelect select={(rating) => setRating(rating)} />
        <div className='input-group'>
          <input
            type='text'
            name='text'
            value={text}
            onChange={(e) => handleTextChange(e)}
            placeholder='Write a review'
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {message && <div className='message'>{message}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
