import DayCard from "./DayCard"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useState } from "react";
import { Button } from "./components/ui/button";

export default function AdminCard() {

  const [categorias, setCategorias] = useState([]);

  useEffect(() => {
      const fetchData = async () => {
          const categoriasResponse = await fetch('http://localhost:1337/api/categorias?populate[plats][fields][0]=id&populate[plats][fields][1]=Nom&fields[0]=id&fields[1]=Nom');
          const categoriasData = await categoriasResponse.json();
          setCategorias(categoriasData.data);
      };

      fetchData();
  }, []);

  const [categoria1, setCategoria1] = useState("");
  const [plat1, setPlat1] = useState("");
  const [categoria2, setCategoria2] = useState("");
  const [plat2, setPlat2] = useState("");

  const [plat1Display, setPlat1Display] = useState("");
  const [plat2Display, setPlat2Display] = useState("");

  const handleCategoria1Change = (value) => {
      setCategoria1(value);
      setPlat1('');
      setPlat1Display('');
  }


  return (
    <div>
        <Card>
          <CardHeader>
            <CardTitle>Afegir un plat nou</CardTitle>
          </CardHeader>
          <CardContent>
                <div>
                    <Select className="justify-center" onValueChange={handleCategoria1Change} value={categoria1}>
                        <SelectTrigger className="w-[140px] text-sm">
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
                    <Input className="my-2"></Input>
                    <Button className="mx-2 my-2 h-[48px] ml-8" variant="destructive" type="submit">Afegir</Button>
                  </div>

          </CardContent>
        </Card>
    </div>
  )
}
