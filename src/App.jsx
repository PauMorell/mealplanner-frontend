import { useState, useEffect } from 'react';
import DayCard from './DayCard';
import ResumenTable from './ResumenTable';
import AdminCard from './AdminCard';
import Login from './Login';
import { Button } from './components/ui/button';
import Modal from 'react-modal';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Logo from './assets/Logo.svg';
import logouticon from './assets/logouticon.svg';
import usericon from './assets/usericon.svg';


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
            <nav className='flex justify-between p-2 mx-2'>
              <div className='lg:flex items-center'>
                <img src={Logo} alt="Logo" className="h-16 w-auto mr-2 mx-4 md:px-0 h-20" />
                <div className='items-center'>
                  <h1 className='text-center space-grotesk font-semibold text-xs md:text-xl lg:text-2xl'>Menú setmanal</h1>
                  <h1 className='text-center space-grotesk font-semibold text-md md:text-2xl lg:text-3xl'>Andreu Coll</h1>
                </div>
              </div>
                {
                    isAuthenticated ? (
                        <Button variant="outline" onLogout={handleLogout} onClick={handleLogout} className="button">
                            <span className="button-text">Finalitza sessió</span>
                            <img src={logouticon} alt="Logout" className="h-4 w-auto ml-2 button-icon" />
                        </Button>
                    ) : (
                        <Button variant="destructive" id="login-btn" onClick={() => setVisibleLogin(true)} className="button">
                            <span className="button-text">Inicia sessió</span>
                            <img src={usericon} alt="Login" className="h-4 w-auto ml-2 button-icon" />
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




