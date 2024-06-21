/* import DayCard from "./DayCard"
import AdminCard from "./AdminCard"
import useFetch from "./hooks/usefetch"

function App() {
  const {loading, error, data} = useFetch("http://localhost:1337/api/categorias")

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :( </p>

  const categories = data?.data || [] 

   

  /* categories.map(cat => console.log(cat.id)) */


 /*  const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

  return (
    <>
      
      <div className="flex-layout-container">
      <DayCard>aaa</DayCard>
        {
          weekDays.map((day, index) => (
            <div>
              <DayCard key={index} dia={day}></DayCard>
            </div>))
        }

        <ul>
          
        </ul>

    </div>
  


    </>
  )
}

export default App */
 
// App.js o el archivo principal
import React, { useState } from 'react';
import DayCard from './DayCard';
import ResumenTable from './ResumenTable';

const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

function App() {
    const [diesSeleccionats, setDiesSeleccionats] = useState(weekDays.map(dia => ({
        nom: dia,
        plat1Display: "",
        plat2Display: ""
    })));

    const updateDia = (dia, plat1Display, plat2Display) => {
        setDiesSeleccionats(prevDias => prevDias.map(d =>
            d.nom === dia ? { ...d, plat1Display, plat2Display } : d
        ));
    }

    return (
      <>
        <div className="div-app">
          <div className='flex-layout-container'>
              {weekDays.map((dia, index) => (
                  <DayCard key={index} dia={dia} updateDia={updateDia} />
              ))}
          </div>
          <div className='flex-layout-container'>
              <ResumenTable className="flex-layout-item" dias={diesSeleccionats} />
          </div>
        </div>
      </>
    );
}

export default App;




