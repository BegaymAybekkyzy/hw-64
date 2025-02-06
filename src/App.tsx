import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import Add from './Containers/AddNewPost/AddNewPost.tsx';
import NavBar from './components/NavBar/NavBar.tsx';

const App = () => {


  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/add" element={<Add/>}/>
      </Routes>
    </>
  );
};

export default App;
