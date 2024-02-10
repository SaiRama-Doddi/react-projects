import { useState,useEffect } from 'react';
import { styled } from 'styled-components';
import SearchResult from './Component/SearchResult/SearchResult';


export const BASE_URL=" http://localhost:9000";


const App = () => {

  const [data,setData]=useState(null);
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState(null);
  const [filteredData,setFilteredData]=useState(null);
  const [selectedBtn,setSelectedBtn] =useState("all");

   useEffect(()=>{
  const fetchFoodData= async() =>{
    setLoading(true);
    try{
    const response= await fetch(BASE_URL);
    const json=await response.json();
    setData(json);
    setFilteredData(json);
    setLoading(false);
    }
   catch(error){
    setError("unable to load");
   }
  };

  fetchFoodData();
  console.log(data);
},[]);

const btnFiltering=(type)=> {
 if(type=== "all"){
  setFilteredData(data);
  setSelectedBtn("all");
 }
 else{
  const filter=data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()));
  setFilteredData(filter);
 }
 setFilteredData(filter);
 setSelectedBtn(type);
}

   if(error) return <div>{error}</div>;
   if(loading) return <div>loading.........</div>
  


const SearchFood=(e) =>{
  const search=e.target.value;
  console.log(search);

  if(search===""){
   setFilteredData(null);
  }

  const filter=data?.filter((food)=>food.name.toLowerCase().includes(search.toLowerCase()));
  setFilteredData(filter);
}



  return (
    <>
  <Container>
   <TopContainer>
    <div className='logo'>
      <img src='/Foody Zone.svg' alt="logo" />
    </div>

    <div className='search'>
   <input   onChange={SearchFood} placeholder='Search Food...' />
    </div>
   </TopContainer>

   <FilterContainer>

    <Button onClick={()=>btnFiltering("all")}>All</Button>
    <Button onClick={()=>btnFiltering("breakfast")}>Breakfast</Button>
    <Button onClick={()=>btnFiltering("lunch")}>lunch</Button>
    <Button onClick={()=>btnFiltering("dinner")}>Dinner</Button>

   </FilterContainer>

  
  </Container>
  <SearchResult data={filteredData} />
  </>
  );
};


const Container=styled.div`
max-width: 1200px;
margin: 0 auto;

`;
const TopContainer=styled.section`
min-height: 140px;
display: flex;
justify-content: space-between;
padding:16px;
align-items: center;

.search{
  input{
    background-color: transparent;
    border:1px solid red;
    color:white;
    font-size:16px;
    height: 40px;
    padding:0 10px ;
  }
}

`;

const FilterContainer=styled.section`
display: flex;
 justify-content: center;
 gap:12px;
 padding-bottom: 40px;
`;
 


 

export default App;

export const Button=styled.button`
background-color: red;
color: white;
border: none;
border-radius: 5px;
padding:6px 12px;
cursor: pointer;
&:hover{
  background-color: #f22f21;
}


`
