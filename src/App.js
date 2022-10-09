import './App.css';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Hireme from './components/Hireme/Hireme';
import Intro from './components/Introduction/Intro';
import Navbar from './components/Navbar/Navbar';
import Services from './components/Services/Services';

function App() {
  return (
   <>
    <div className='App'>
      <Navbar/>
      <Intro/>
      <Services/>
      <Hireme/>
      <Contact/>
      <Footer/>
      </div>
   </>
  );
}

export default App;
