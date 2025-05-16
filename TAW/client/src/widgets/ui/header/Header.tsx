import { Link } from 'react-router-dom';
import { ThemeToggle } from '@shared/ui/ThemeToggle';

export const Header = () => {
  return (
    <header className="on_top">
      <div className="next_to_top">
        
        <Link to="/" className="CLASS__NAME">
          MyApp
        </Link>

        <nav className="CLASS__NAME">
          <Link to="/login" className="CLASS__NAME">
            Login
          </Link>
          <Link to="/registration" className="CLASS__NAME">
            Register
          </Link>
        </nav>
      </div>
      <ThemeToggle />
    </header>
  );
};