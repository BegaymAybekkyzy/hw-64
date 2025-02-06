import { Route, Routes } from 'react-router-dom';
import Home from './Containers/Home/Home.tsx';
import NavBar from './components/NavBar/NavBar.tsx';
import AddNewPost from './Containers/AddNewPost/AddNewPost.tsx';

const App = () => {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/new-post" element={<AddNewPost/>}/>
      </Routes>
    </>
  );
};

export default App;
