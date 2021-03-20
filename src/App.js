import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer  from 'components/Footer';
import Navbar from 'components/Navbar';
import Header from 'components/Header';
import Offers from 'containers/Offers';

function App() {
  return (
    <div>
      <Navbar />
        <Header />
          <Offers />
      <Footer />
    </div>
  );
}

export default App;
