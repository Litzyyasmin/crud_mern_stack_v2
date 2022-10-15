import './App.css';
import { BrowserRouter } from 'react-router-dom'
import { Approuters } from './router/Approuters';
import { Header } from './components/Header';
import { RegistroProvider } from './context/RegistroProvider';


function App() {
  return (
    <RegistroProvider>
    <BrowserRouter>
      <Header />
      <Approuters />
    </BrowserRouter>
    </RegistroProvider>
  );
}

export default App;
