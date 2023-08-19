import { useState } from 'react'
import './App.css'
import { EmojiProvider } from './EmojiContext'
import BitcoinRates from './BitcoinRates.jsx'
import Emoji from './Emoji.jsx'


function App() {
  return (
    <EmojiProvider> 
      <BitcoinRates />
      <Emoji />
    </EmojiProvider>
  );
}

export default App

