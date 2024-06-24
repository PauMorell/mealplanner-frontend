import { useState, useEffect } from 'react';
import DayCard from './DayCard';
import ResumenTable from './ResumenTable';
import AdminCard from './AdminCard';
import Login from './Login';
import { Button } from './components/ui/button';
import Modal from 'react-modal';

const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [token, setToken] = useState('');

  useEffect(() => {
    const savedToken = localStorage.getItem('token');
    if (savedToken) {
      setToken(savedToken);
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogin = (jwt) => {
    setToken(jwt);
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false)
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

    const [visibleLogin, setVisibleLogin] = useState(false);

    function closeModal() {
      setVisibleLogin(false);
    }

    return (
      <>
{/*       <div className='p-10'>
      {isAuthenticated ? (
            <div className='flex justify-between'>
          <h4>Benvingut, has iniciat sessió correctament</h4>
          <Button onClick={handleLogout}>Finalitza la sessió</Button>
          </div> 
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div> */}
                
        <div className="div-app">
          <div className='flex justify-between bg-black'>
            <nav className='p-2 fixed top-0 left-0 right-0'>
              {
                isAuthenticated ? (
                  <div>
                    <h4>Benvingut, has iniciat sessió correctament</h4>
                    <Button onLogout={handleLogout} onClick={handleLogout}>Finalitza la sessió</Button>
                  </div>
                ) : (
                  <Button className="bg-white text-black blur-0 border" onClick={() => setVisibleLogin(true)}>Inicia sessió</Button>
                )
              }
              
              </nav>
          </div>
          
          <div className='flex-layout-container'>
            <div className='grid-layout-container'>
            <div>
            <AdminCard token={token}  />

            <div>
              <Modal 
              isOpen={visibleLogin}
              onRequestClose={closeModal}
              
              >
                <Login onLogin={handleLogin && closeModal} />
                <Button onClick={closeModal}></Button>
                </Modal>
            </div>
            
            {/* {!token && <Login onLogin={handleLogin} />} */}
          </div>
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




