import React from 'react';
import PropTypes from 'prop-types';
import { v4 } from 'uuid';

function NewTicketForm(props) {
  let _names = null;
  let _location = null;
  let _issue = null;

  function handleNewTicketFormSubmission(event) {
    event.preventDefault();

    props.onNewTicketCreation({name: _name.value, content: _content.value, id: v4()});
    _name.value = '';
    _content.value = '';
  }

  return (
    <div>
      <form onSubmit={handleNewTweet}>
        <input
          type='text'
          id='name'
          placeholder='Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='content'
          placeholder='Content'
          ref={(input) => {_content = input;}}/>
        <button type='submit'>Create Post</button>
      </form>
    </div>
  );
}

NewTweetForm.propTypes = {
onNewTweetCreation: PropTypes.func
};

export default NewTweetForm;
