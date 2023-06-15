import './App.css';
import { Header } from './Header';
import { Body } from './Body';
import { Body2 } from './Body2';
import { Body3 } from './Body3';
import { Body4 } from './components/Body4';
import { Body5 } from './components/Body5';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className='bg-black w-full text-white h-full'>
        <Header/>
        <Body/>
        <Body2/>
        <Body3/>
        <Body4/>
        <Body5/>
        <Footer/>

    </div>
  );
}

export default App;
