import './App.css';
import Navbar from './components/navbar/navbar'
import Banner from './components/Banner/banner'
import Rowpost from './components/rowPost/row-post';
import {originals, actions} from './url'

function App() {
  return (
    <div className="App">
     <Navbar />
     <Banner />
     <Rowpost url={originals} title='Netflix Originals'/>
     <Rowpost url={actions} title='Action' isSmall/>
    </div>
  );
}

export default App;
