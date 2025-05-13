import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DefaultLayout from './layout/DefaultLayout';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/movies/:id' element={<MovieDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};