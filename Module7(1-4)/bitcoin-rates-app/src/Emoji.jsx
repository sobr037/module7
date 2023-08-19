import React from 'react';
import { useEmoji } from './EmojiContext';
import './Emoji.css';

const Emoji = () => {
  const { isHappy, toggleMood } = useEmoji();

  return (
    <div>
      <span role="img" aria-label={isHappy ? 'Happy' : 'Sad'}>
        {isHappy ? '😄' : '😢'}
      </span>
      <br />
      <button onClick={toggleMood}>Change Mood</button>
    </div>
  );
};

export default Emoji;
