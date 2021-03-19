import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Footer } from 'components/Footer';
import { Navbar } from 'components/Navbar';
import { HeaderImg } from 'components/HeaderImg';

function App() {
  return (
    <div>
      <Navbar />
        <HeaderImg />
      <Footer />
    </div>
  );
}

export default App;
