<<<<<<< HEAD
import './App.css';
import Applayout from './layout/Applayout';

function App() {
  return (
    <>
      <Applayout />
    </>
=======
import Header from './Components/Header/Header';
import './App.css';
import Homepage from './Pages/Homepage/Homepage';
import Explore from './Components/Explore/Explore';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div>
        <Header />
        <Homepage />
        <Footer />
    </div>
>>>>>>> 33db1ffd0265c75393102c56d7b01b41b600a13b
  );
}

export default App;
