
import './App.css';
import NavBar from './components/NavBar'
import "../src/components/NavBar.css";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


function App(){
    return( 
        <div className="App">
            <NavBar/>
            <ItemListContainer greeting={'Bienvenidos a PET CLUB'}/>
        </div>
    );
}


export default App;
