import { useState } from 'react';
import DayCard from './DayCard';
import ResumenTable from './ResumenTable';
import AdminCard from './AdminCard';
import Login from './Login';

const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  const handleLogin = (jwt) => {
    setIsAuthenticated(true);
    setToken(jwt);
  };



    const [diesSeleccionats, setDiesSeleccionats] = useState(weekDays.map(dia => ({
        nom: dia,
        plat1Display: "",
        plat2Display: ""
    })));

    const updateDia = (dia, plat1Display, plat2Display) => {
        setDiesSeleccionats(prevDias => prevDias.map(d =>
            d.nom === dia ? { ...d, plat1Display, plat2Display } : d
        ));
    }

    return (
      <>
      <div className='p-10'>
      {isAuthenticated ? (
        <div>Benvingut, has iniciat sessió correctament</div> 
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
        <div className="div-app">
          <div className='flex-layout-container'>
            <div className='grid-layout-container'>
              <AdminCard></AdminCard>
                {weekDays.map((dia, index) => (
                    <DayCard className="grid-layout-item" key={index} dia={dia} updateDia={updateDia} />
                ))}
            </div>
          </div>
          <div className='flex-layout-container'>
              <ResumenTable className="flex-layout-item" dias={diesSeleccionats} />
          </div>
        </div>
      </>
    );
}

export default App;




