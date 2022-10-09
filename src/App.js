import './App.css';
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
      </div>
   </>
  );
}

export default App;
