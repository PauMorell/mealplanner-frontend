import { Button } from "./components/ui/button"
import DayCard from "./DiaCard"
import useFetch from "./hooks/usefetch"

function App() {
  const {loading, error, data} = useFetch("http://localhost:1337/api/categorias")

/*   if(loading) return <p>Loading...</p>
  if(error) return <p>Error :( </p> */

    /* const categories = data?.data || [] */

   
  /* console.log(data.data) */
  /* let categors = data.data;
  console.log(categors)
  categors.map(cat => {
    console.log(cat.attributes.Nom)
  }) */

  const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"]

  return (
    <>
     
      <DayCard dia={weekDays[2]}/>
      <div className="grid-container">
        {
          weekDays.map(day =>
            <div className="grid-item">
              <DayCard key={weekDays.lenght + 1} dia={day}></DayCard>
            </div>)
        }
      <div className="grid-item">Columna 1, fila 1</div>
      <div className="grid-item">Columna 2, fila 1</div>
      <div className="grid-item">Columna 1, fila 2</div>
      <div className="grid-item">Columna 2, fila 2</div>
      <div className="grid-item">Columna 1, fila 3</div>
      <div className="grid-item">Columna 2, fila 3</div>
      <div className="grid-item">Columna 1, fila 4</div>
      <div className="grid-item">Columna 2, fila 4</div>
      <div className="grid-item">Columna 1, fila 5</div>
      <div className="grid-item">Columna 2, fila 5</div>
      <div className="grid-item">Columna 1, fila 6</div>
      <div className="grid-item">Columna 2, fila 6</div>
      <div className="grid-item">Columna 1, fila 7</div>
      <div className="grid-item">Columna 2, fila 7</div>
      <div className="grid-item">Columna 1, fila 8</div>
      <div className="grid-item">Columna 2, fila 8</div>
    </div>
  


    </>
  )
}

export default App
