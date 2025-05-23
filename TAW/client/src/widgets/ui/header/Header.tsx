import { Link } from 'react-router-dom';
import { ThemeToggle } from '@shared/ui/ThemeToggle';
import './header.css'


export const Header = () => {
  return (
    <header className="on_top ">
      <div className="next_to_top">
        
        <Link to="/" className="logo">
          TAW
        </Link>

        <nav className="header__wrapper">
          <Link to="/login" className="header__link">
            Login
          </Link>
          <Link to="/registration" className="header__link">
            Register
          </Link>
          <Link to="/attrection" className='header__link'>Attrection</Link>
        </nav>
      </div>
      <ThemeToggle />
    </header>
  );
};