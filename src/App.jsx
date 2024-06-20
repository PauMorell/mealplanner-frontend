import { Button } from "./components/ui/button"
import useFetch from "./hooks/usefetch"

function App() {
  const {loading, error, data} = useFetch("http://localhost:1337/api/categorias")

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error :( </p>

    /* const categories = data?.data || [] */

   
  /* console.log(data.data) */
  let categors = data.data;
  console.log(categors)
  categors.map(cat => {
    console.log(cat.attributes.Nom)
  })

  return (
    <>
      <Button>De lokos</Button>
      <div>
      <div>
        {/* {categories.map((item) => (
          <p key={item.id}>{item.attributes.Nom}</p>
        ))} */}
      </div>
      </div>
    </>
  )
}

export default App
