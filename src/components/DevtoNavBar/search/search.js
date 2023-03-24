import React from 'react';
import SearchIcon from '@mui/icons-material/Search';



const Search=()=>{
   
    return (

      <div style={{"width":"20%","marginLeft":"3%","display":"flex", "border":"1px solid black", "borderRadius":"10px"}}>
        <input type="text" style={{"width":"90%","border":"0px"}} name="" id="" />
        <button style={{"border":"0px", "backgroundColor":"transparent"}} >
        <SearchIcon/>
        </button>
      </div>
         
        
      ); 
}

export default Search