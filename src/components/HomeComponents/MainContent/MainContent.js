import React from 'react'
import BasicCards from './BasicCards/BasicCards'
import LastCard from './LastCard/LastCard'
import MainButtons from './MainButtons/MainButtons'

const MainContent = () => {
  return (
    <div style={{border:''}}>
      <MainButtons/>
      
      <BasicCards/>
      
    </div>
  )
}

export default MainContent