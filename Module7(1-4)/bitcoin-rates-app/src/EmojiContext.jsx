import React, { createContext, useContext, useState } from 'react';

// Create the context
const EmojiContext = createContext();

// Create a custom hook to use the context
export const useEmoji = () => {
  return useContext(EmojiContext);
};

// Create a provider component to wrap your app
export const EmojiProvider = ({ children }) => {
  const [isHappy, setIsHappy] = useState(true);

  const toggleMood = () => {
    setIsHappy(!isHappy);
  };

  return (
    <EmojiContext.Provider value={{ isHappy, toggleMood }}>
      {children}
    </EmojiContext.Provider>
  );
};
