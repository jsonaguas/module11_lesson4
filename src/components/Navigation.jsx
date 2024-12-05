import { NavLink } from 'react-router-dom';
import '../App.css';

const Navigation = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to="/home" className="active-link">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/browse" className="active-link">Browse Characters</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/comics" className="active-link">Comics</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;