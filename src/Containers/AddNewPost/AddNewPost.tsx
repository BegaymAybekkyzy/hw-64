import BlogForm from '../../components/BlogForm/BlogForm.tsx';
import { useNavigate } from 'react-router-dom';
import { IPostForm } from '../../types.d.tsx';
import axiosApi from '../../axiosApi.ts';
import { useState } from 'react';
import Loader from '../../components/Loader/Loader.tsx';
import { toast } from 'react-toastify';

const AddNewPost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const  onSubmitAddNewPost = async (post: IPostForm) => {
    try {
      console.log(post);
      setLoading(true);
      await axiosApi.post("blog.json", post);
      toast.success('Пост создан');
      navigate('/');
    }catch (e) {
      alert(`Error: ${e}`);
    } finally {
      setLoading(false);
    }

  };

  return (
    <>
      {loading
        ? <Loader />
        : <div className='container'>
          <h1>Добавить пост</h1>
          <div className='p-3 mw-50'>
            <BlogForm onSubmitFunction={onSubmitAddNewPost}/>
          </div>
        </div>
      }
    </>

  );
};

export default AddNewPost;