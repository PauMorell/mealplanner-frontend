import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function DayCard({ dia, updateDia }) {
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

    const handleCategoria2Change = (value) => {
        setCategoria2(value);
        setPlat2('');
        setPlat2Display('');
    }

    const handlePlat1Change = (value) => {
        setPlat1(value);
        const categoria = categorias.find(cat => cat.id === parseInt(categoria1));
        const plat = categoria?.attributes.plats.data.find(p => p.id === parseInt(value));
        setPlat1Display(plat ? plat.attributes.Nom : '');
        updateDia(dia, plat ? plat.attributes.Nom : '', plat2Display);
    }

    const handlePlat2Change = (value) => {
        setPlat2(value);
        const categoria = categorias.find(cat => cat.id === parseInt(categoria2));
        const plat = categoria?.attributes.plats.data.find(p => p.id === parseInt(value));
        setPlat2Display(plat ? plat.attributes.Nom : '');
        updateDia(dia, plat1Display, plat ? plat.attributes.Nom : '');
    }

    return (
        <Card>
            <CardHeader className="text-center py-4">
                <CardTitle>{dia}</CardTitle>
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
                <div className="day-card-category-selector2">
                    <Select onValueChange={handleCategoria2Change} value={categoria2}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Categoria" />
                        </SelectTrigger>
                        <SelectContent>
                            {categorias.map(cat => (
                                <SelectItem key={cat.id} value={cat.id}>{cat.attributes.Nom}</SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
                <div className="day-card-plat-selector1">
                    <Select onValueChange={handlePlat1Change} value={plat1}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Primer plat" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="nu">Elimina la selecció</SelectItem>
                            {categoria1 && categorias
                                .find(cat => cat.id === parseInt(categoria1))
                                ?.attributes.plats.data.map(plat => (
                                    <SelectItem key={plat.id} value={plat.id}>
                                        {plat.attributes.Nom}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>
                <div className="day-card-plat-selector2">
                    <Select onValueChange={handlePlat2Change} value={plat2}>
                        <SelectTrigger className="w-[140px]">
                            <SelectValue placeholder="Segon plat" />
                        </SelectTrigger>
                        <SelectContent>
                        <SelectItem value="u">Elimina la selecció</SelectItem>
                            {categoria2 && categorias
                                .find(cat => cat.id === parseInt(categoria2))
                                ?.attributes.plats.data.map(plat => (
                                    <SelectItem key={plat.id} value={plat.id}>
                                        {plat.attributes.Nom}
                                    </SelectItem>
                                ))
                            }
                        </SelectContent>
                    </Select>
                </div>  
            </CardContent>
            <CardFooter>
                <h1>
                    {
                        plat1Display && plat2Display
                        ? `${plat1Display} i ${plat2Display.substring(0).toLowerCase()}`
                        : plat1Display
                        ? `${plat1Display}`
                        : "Selecciona els plats"
                    }
                </h1>
            </CardFooter>
        </Card>
    );
}
