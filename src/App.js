import './App.css';
import Home from './components/pages/Home';
import TheFooter from './components/TheFooter';
import TheHeader from './components/TheHeader';

function App() {
  return (
    <>
    <div className="container mx-auto lg:px-32">
    
    <TheHeader/>

    <Home/>

    <TheFooter/>


    </div>
    </>
  );
}

export default App;
