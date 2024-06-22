import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input"; // Asegúrate de que este es el camino correcto
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:1337/api/auth/local", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        identifier: username,
        password: password,
      }),
    });

    const data = await response.json(); // Cambia JSON a json

    if (data.jwt) {
      localStorage.setItem('token', data.jwt);
      onLogin(data.jwt);
    } else {
      alert("Login error! " + data.message);
    }
  };

  return (
<div className="">
  <Card className="w-96 p-4">
    <form onSubmit={handleSubmit}>
      <label className="mx-2" htmlFor="usuari">Usuari</label>
      <Input
        className="mx-2 my-2 w-[280px] h-[48px]"
        id="usuari"
        type="text"
        placeholder="Nom d'usuari"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <label className="mx-2" htmlFor="contrassenya">Contrassenya</label>
      <div className="flex">
        <Input
          className="m-2 my-2 h-[48px]"
          id="contrassenya"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="`123456` ja està agafada"
          required
        />
        <Button className="mx-2 my-2 h-[48px] ml-8" variant="secondary" type="submit">Login</Button>
      </div>
    </form>
  </Card>
</div>
  );
}
