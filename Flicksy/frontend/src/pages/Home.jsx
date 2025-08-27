import React from 'react'
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import HeroSection from '../components/HeroSection';
import CategoryCard from '../components/CategoryCard';
import SpecialCardOrange from '../components/SpecialCardOrange';
import SpecialCardBlue from '../components/SpecialCardBlue';

const Home = () => {
  return (
    <div>
        <Header/>
        <SearchBar/>
        <HeroSection/>
        <CategoryCard/>
        <SpecialCardOrange dealname="DEALS OF THE DAY"/>
        <SpecialCardBlue dealname="VENDORS  NEARBY"/>
        <SpecialCardOrange dealname="BUDGET  BUYS"/>
        <SpecialCardBlue dealname="FLASH  DEALS"/>
        <SpecialCardOrange dealname="INSTANT  FOODS "/>

    </div>
  )
}

export default Home