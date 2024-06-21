import DayCard from "./DayCard"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useEffect } from "react";
import { useState } from "react";

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
          <CardContent className="day-card-selectors">
                <div className="day-card-category-selector1">
                    <Select onValueChange={handleCategoria1Change} value={categoria1}>
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
          </CardContent>
        </Card>
    </div>
  )
}
