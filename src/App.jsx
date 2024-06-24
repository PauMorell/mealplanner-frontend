import { useState, useEffect } from 'react';
import DayCard from './DayCard';
import ResumenTable from './ResumenTable';
import AdminCard from './AdminCard';
import Login from './Login';
import { Button } from './components/ui/button';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const weekDays = ["Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte", "Diumenge"];

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    border: 'none', 
    padding: '0px', 
    borderRadius: '10px', 
    boxShadow: 'none', 
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.65)' 
  }
};

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
    setIsAuthenticated(true);
    toast.success('Sessió iniciada correctament');
  };


  const handleLogout = () => {
    localStorage.removeItem('token');
    setToken(null);
    setIsAuthenticated(false);
    toast.info('Has finalitzat sessió');
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

                
        <div className="div-app">
          <div className='mb-0'>
            <nav className='flex justify-between p-2'>
              <div className='flex items-center'>
                <img src="src\assets\Logo.svg" alt="Logo" className="h-16 w-auto mr-2" />
                <div className='items-center'>
                  <h1 id='text-logo' className='text-center text-sm space-grotesk text-lg font-semibold'>Menú setmanal</h1>
                  <h1 id='text-logo' className='text-xl space-grotesk text-lg font-semibold'>Andreu Coll</h1>
                </div>
              </div>
              {
                isAuthenticated ? (
                    <Button variant="outline" onLogout={handleLogout} onClick={handleLogout}>Finalitza sessió
                    <img src="src\assets\logouticon.svg"  alt="Logout" className="h-4 w-auto ml-2" />
                    </Button>
                ) : (
                  <Button variant="destructive" id="login-btn" onClick={() => setVisibleLogin(true)}>Inicia sessió
                  <img src="src\assets\usericon.svg"  alt="Logout" className="h-4 w-auto ml-2" />
                  </Button>
                )
              }
              
              </nav>
          </div>
          
          <div className='flex-layout-container'>
            <div className='grid-layout-container'>
            <div>
            <AdminCard token={token} />

            <div>
              <Modal 
              isOpen={visibleLogin}
              onRequestClose={closeModal}
              style={customStyles}
              
              >
                <Login onLogin={(jwt) => {
                  handleLogin(jwt);
                  closeModal();
                  id="modal-id"
                }} />
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
          <ToastContainer icon={false} position="bottom-right" theme='dark' autoClose={1500} />
        </div>
      </>
    );
}

export default App;




