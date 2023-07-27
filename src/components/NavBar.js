
import { NavLink, Link } from 'react-router-dom';
import CartWidget from './CartWidget';
import './NavBar.css';



const NavBar = () => {
  return (
    <nav className='nav'>
      <Link to='/'>
        <h3 className='titulo'>PetClub</h3>
      </Link>
      <div className='total'>
        <NavLink to={`/category/perros`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Perros</NavLink>
        <NavLink to={`/category/gatos`} className={({ isActive}) => isActive ? 'ActiveOption' : 'Option'}>Gatos</NavLink>
        
      </div>
      <CartWidget/>
    
    </nav>
  )
}


  

export default NavBar;