import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"

export default function DayCard(props) {
    const dia = props.dia;


  return (
    <Card className="w-[360px] m-[58px] ">
        <CardHeader>
            <CardTitle>{dia}</CardTitle>
        </CardHeader>
        <CardContent className="day-card-selectors">
        <div className="day-card-category-selector1">
            <Select>
                <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="day-card-category-selector2">
            <Select>
                <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Categoria" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="day-card-plat-selector1">
        <Select>
                <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Primer plat" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="day-card-plat-selector2">
        <Select>
                <SelectTrigger className="w-[160px]">
                    <SelectValue placeholder="Primer plat" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                </SelectContent>
            </Select>
        </div>
        <div className="day-card-textinput1">
            <Input className="w-[160px]" placeholder="Extra"/>
        </div>
        <div className="day-card-textinput2">
            <Input className="w-[160px]" placeholder="Extra"/>
        </div>




        </CardContent>
        <CardFooter>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
        </CardFooter>
        <CardFooter>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
        </CardFooter>
        <CardFooter>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
            <h1>ss</h1>
        </CardFooter>



    </Card>
  )
}
