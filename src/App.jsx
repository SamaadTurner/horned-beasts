import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Header.jsx';
import Gallery from './Gallery.jsx';
import Footer from './Footer.jsx';
import hornedBeastPics from '../src/assets/data.json';


function App() {
  

  return (

    <div className="app">
      <Header />
      <Gallery data={hornedBeastPics}/>
      <Footer />
    </div>
  );





  
}

export default App
