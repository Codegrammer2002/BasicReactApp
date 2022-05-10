import React from "react";

import './App.css';

/* This is by creating components. 
Components can be understood as little building blocks of the UI that we create using react
A demonstration has been given belwo
 */

// creating a header component
function Header(props){
  console.log(props);

  return(
    <header>
    <h1>This is {props.name}'s  Restaurant</h1>
    </header>
  )
  }
// creating a Main component 
function Main(props){
  return(
 <section> 
   <p>We serve the dishes below</p>
   <ul style ={{textAlign: "left"}}>
     {props.dishes.map((dish) =>(
       <li key= {dish.id} >{dish.title}</li>
     ))}
   </ul>
 </section>
  );
}
 // creating a footer component
 function Footer(props){
   return(
     <footer>
       <p> This is tutorial was completed in {props.year}</p>
       <img src = "https://github.com/Codegrammer2002.png" alt ="Demon Kane"></img>
     </footer>

   )
 }

const dishes = [
  "Data1",
  "Data2",
  "Data"

];
const dishObjects = dishes.map((dish , i) => ({id: i , title: dish}));

// dishes.map(dish) => console.log((dish));

// this is also an example of an 'App' component that we have created.
function App() {
 /* This is one way to render a page in react but the more conventional way is given above. */
  return (
    <div className="App">
      <Header name = "User" />
     {/*<h1> Header</h1> */}
     <Main dishes = {dishObjects} />

      {/* <h2>Main</h2> */}

      {/* <h3>Footer</h3> */}
      <Footer year ={new Date().getFullYear()} />

    </div>
  );
}

export default App;