import React,{useEffect, useContext} from 'react';
import './App.css';
import {useState} from 'react';
import logo from './logo.svg';
import TaskList from './components/TaskList';
import Navbar from './components/Navbar';
import SearchComponent from './components/SearchComponent';
import { CountryContext } from './context/countryContext';
import ListCountries from './components/ListCountries';
import { CountryProperties } from './interfaces/Task';
import { Task } from './interfaces/Task';


interface propData{
  titulo?: string
}



function App(props: propData) {

  const [tasks, setTasks] = useState<Task[]>([{
    id: 1,
    title: "Learn React",
    description: "Learn React",
    completed: false,
  }]);


  const [countries, setCountries] = useState<CountryProperties[]>([]);
  const updateCountries = (newCountries: CountryProperties[]) => {
    setCountries(newCountries);
  }
  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then(response => response.json())
      .then(data =>{
        console.log('DATA FROM FETCH: ');
        console.log(data); 
         setCountries(data)
      });
  }, []);


return(
  <CountryContext.Provider value={countries}>
  <Navbar/>
  <SearchComponent  onUpdateCountries={updateCountries}/>
  <ListCountries/>
  </CountryContext.Provider>
)
//   return (
//     <div className="bg-dark text-white" style = {{height: '100vh'}}>
//       <nav className='navbar navbar-dark bg-primary'>
//         <div className='container'>
//           <a href="/" className='navbar-brand'>
//             <img src={logo} alt="React logo" />
// {props.titulo &&(
//   <h1>{props.titulo }</h1>
// )}
//           </a>
//         </div>
//       </nav>
//       <main className="container p-4">
//         <div className="col-md-4">Task Form</div>
//   <div className="col-md-8">
//     <div className="row">
//     <TaskList tasks = {tasks}/>
//     </div>
//     </div> 
  
//       </main>


//     </div>
//   );
}

export default App;
