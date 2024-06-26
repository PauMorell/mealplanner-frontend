import { useEffect, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle,CardFooter } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminCard({ token }) {
  const [categorias, setCategorias] = useState([]);
  const [selectedCategoria, setSelectedCategoria] = useState("");
  const [platNou, setPlatNou] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const categoriasResponse = await fetch('https://mealplanner-backend-69q4.onrender.com/api/categorias?populate[plats][fields][0]=id&populate[plats][fields][1]=Nom&fields[0]=id&fields[1]=Nom', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const categoriasData = await categoriasResponse.json();
      setCategorias(categoriasData.data);
    };

    if (token) {
      fetchData();
    }
  }, [token]);

  const handleCategoriaChange = (value) => {
    setSelectedCategoria(value);
  };

  const handlePlatChange = (e) => {
    setPlatNou(e.target.value);
  };

  const handleAddPlat = async (e) => {
    if (selectedCategoria && platNou) {
      try {
        const response = await fetch('https://mealplanner-backend-69q4.onrender.com/api/plats', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
          },
          body: JSON.stringify({
            data: {
              Nom: platNou,
              categorias: selectedCategoria
            }
          })
        });
        if (response.ok) {
          const categoriasResponse = await fetch('https://mealplanner-backend-69q4.onrender.com/api/categorias?populate[plats][fields][0]=id&populate[plats][fields][1]=Nom&fields[0]=id&fields[1]=Nom', {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
          const categoriasData = await categoriasResponse.json();
          setCategorias(categoriasData.data);

          setSelectedCategoria("");
          setPlatNou("");
        } else {
          console.error('Error al añadir el plato');
        }
      } catch (error) {
        console.error('Error al añadir el plato', error);
      }
    }
  };

  return (
    <div>
      <Card className="bg-neutral-100 shadow">
        <CardHeader>
          <CardTitle className="text-center">Afegir un plat nou</CardTitle>
        </CardHeader>
        <CardContent>
          {token ? (
            <form onSubmit={handleAddPlat}>
              <div>
                <Select className="justify-center" onValueChange={handleCategoriaChange} value={selectedCategoria}>
                  <SelectTrigger className="w-full text-sm">
                    <SelectValue placeholder="Categoria" />
                  </SelectTrigger>
                  <SelectContent>
                    {categorias.map(cat => (
                      <SelectItem key={cat.id} value={cat.id}>{cat.attributes.Nom}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="flex">
                <Input 
                  className="my-2 w-full" 
                  placeholder="Plat nou"
                  value={platNou}
                  onChange={handlePlatChange}
                />
                <Button className="mx-0 my-2 h-[48px] ml-2" variant="destructive" type="submit">Afegir</Button>
              </div>
              
            </form>
          ) : (
            <div className="text-grey-400 text-center">És necessari <u>iniciar sessió</u>.
            
            
            
            </div>
          )}
        </CardContent>

      </Card>
    </div>
  );
}
