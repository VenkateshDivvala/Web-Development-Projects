import './App.css';
import News from './News';
import { useEffect, useState } from 'react';
function App() {
  let [articles,setarticles]=useState([])
  let [category,setcategory]=useState("india")
   useEffect(()=>{
    fetch('https://newsapi.org/v2/everything?q={category}&from=2024-21-03&apiKey=09d8feb326de4bcf8d1004c51cc14096')
    .then((response)=>response.json())
    .then((data)=>{
      setarticles(data.articles)
    }).catch((err)=>{
      console.log(err)
    })
  },[category])
  return (
    <div className="App">
      <header>
          <div className='logo'><h1>EveryThing</h1></div>
          <input type='text' placeholder='Search...' onChange={(event)=>{
            if(event.target.value!==""){
            setcategory(event.target.value)
            }
            else{
              setcategory("india")
            }
          }}></input>
      </header>
      <section>
           {
            articles.map((article)=>{
              return (
              <News news={article}></News>
              );
            })
           }
      </section>
    </div>
  );
}

export default App;
