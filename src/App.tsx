import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import AddNewPost from "./Containers/AddNewPost/AddNewPost.tsx";
import EditPost from "./Containers/EditPost/EditPost.tsx";
import DetailedPost from './components/DetailedPost/DetailedPost.tsx';
import About from './Containers/About/About.tsx';
import Contacts from './Containers/Contacts/Contacts.tsx';

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<Home />}>
          <Route path=":id" element={<DetailedPost/>}/>
          <Route path=":id/edit" element={<EditPost />} />
        </Route>
        <Route path="/blog/new-post" element={<AddNewPost />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<h1 className='text-center'>Такой страницы не существует</h1>} />
      </Routes>
    </>
  );
};

export default App;
