import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <header>
      <div className='container'>
        <nav>
          <NavLink to='/' >Home</NavLink>
        </nav>
      </div>
    </header>
  );
};