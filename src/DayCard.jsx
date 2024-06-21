import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useState, useEffect } from "react";

export default function DayCard(props) {
    const dia = props.dia;

    const [categorias, setCategorias] = useState([]);
    const [plats, setPlats] = useState([]);

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

    const handleCategoria1Change = (value) => {
        setCategoria1(value);
        setPlat1('');
    }

    const handleCategoria2Change = (value) => {
        setCategoria2(value);
        setPlat2('');
    }

    const handlePlat1Change = (value) => {
        setPlat1(value);
    }

    const handlePlat2Change = (value) => {
        setPlat2(value);
    }

    return (
        <Card className="w-[360px] m-[58px] flex-layout-item">
            <CardHeader>
                <CardTitle>{dia}</CardTitle>
            </CardHeader>
            <CardContent className="day-card-selectors">
                <div className="day-card-category-selector1">
                    <Select onValueChange={handleCategoria1Change} value={categoria1}>
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
                            <SelectValue placeholder="Primer plat" />
                        </SelectTrigger>
                        <SelectContent>
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
                <div className="day-card-textinput1">
                    <Input className="w-[140px]" placeholder="Extra" />
                </div>
                <div className="day-card-textinput2">
                    <Input className="w-[140px]" placeholder="Extra" />
                </div>
            </CardContent>
            <CardFooter>
                <h1>ss</h1>
            </CardFooter>
        </Card>
    );
}
