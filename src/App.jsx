import DayCard from "./DayCard"
import AdminCard from "./AdminCard"
import useFetch from "./hooks/usefetch"

function App() {
  const {loading, error, data} = useFetch("http://localhost:1337/api/categorias")

/*   if(loading) return <p>Loading...</p>
  if(error) return <p>Error :( </p> */

  const categories = data?.data || [] 

   

  categories.map(cat => console.log(cat.id))


  const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

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

export default App
