import React from 'react'
import { Link } from 'react-router-dom'
import { useSearchParams } from "react-router-dom";
import CardsSearch from '../components/SearchCommponen/CardsSearch/CardsSearch';
import MenuSearch from '../components/SearchCommponen/MenuSearch/MenuSearch';
import MenuVertical from '../components/SearchCommponen/MenuSearch/MenuVertical';
import TitleSearch from '../components/SearchCommponen/TitleSearch/TitleSearch';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams])
  
  console.log('searchParams:..',params);
  return (
    <div>
      <Link to={'/'}>HOME</Link>
        <br />
        <TitleSearch/>
        <MenuSearch />
        <MenuVertical/>
        <CardsSearch/>
      
    </div>
  )
}

export default Search