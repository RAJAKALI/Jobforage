import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import HomeCards from  './Components/HomeCards'
import JobsListings from './Components/JobsListings';
import ViewAllJobs from './Components/ViewAllJobs';
const App = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <HomeCards/>
    <JobsListings/>
    <ViewAllJobs/>
    </>
  );
};

export default App;