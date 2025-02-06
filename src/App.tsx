import { Route, Routes } from "react-router-dom";
import Home from "./Containers/Home/Home.tsx";
import NavBar from "./components/NavBar/NavBar.tsx";
import AddNewPost from "./Containers/AddNewPost/AddNewPost.tsx";
import EditPost from "./Containers/EditPost/EditPost.tsx";
import DetailedPost from './components/DetailedPost/DetailedPost.tsx';


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
      </Routes>
    </>
  );
};

export default App;
