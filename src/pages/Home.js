import React from 'react';
import '../index.css';
import Instructions from '../components/Instructions';
import MainScreen from '../components/MainScreen';
import Help from '../components/Help';
import Navigation from '../components/Navigation';
import { useSelector } from 'react-redux';

function Home() {
  const instructions = useSelector((state) => state.navigation.instructions); // Retrieve the instructions state from the Redux store
  const help = useSelector((state) => state.navigation.help); // Retrieve the help state from the Redux store

  return (
    <>
      <Navigation /> {/* Render the navigation component */}
      
      {/* Conditionally render the appropriate component based on the state */}
      {instructions && !help && <Instructions />} {/* Render the Instructions component if instructions are true and help is false */}
      {help && !instructions && <Help />} {/* Render the Help component if help is true and instructions are false */}
      {!instructions && !help && <MainScreen />} {/* Render the MainScreen component if both instructions and help are false */}
    </>
  );
}

export default Home;
