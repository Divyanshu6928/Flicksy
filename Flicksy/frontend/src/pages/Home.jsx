import React from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';

const Home = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <HeroSection/>
        <CategoryCard/>
    </div>
  )
}

export default Home