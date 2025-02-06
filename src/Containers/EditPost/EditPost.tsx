import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosApi from "../../axiosApi.ts";
import Loader from "../../components/Loader/Loader.tsx";
import BlogForm from "../../components/BlogForm/BlogForm.tsx";
import { IPostForm } from "../../types.d.tsx";

const EditPost = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();

  const postEditing = async (post: IPostForm) => {
    try {
      setLoading(true);
      await axiosApi.put<IPostForm>(`blog/${id}.json`, { ...post });
      navigate("/posts");
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <BlogForm isEdit onSubmitFunction={postEditing} id={id} />
      )}
    </div>
  );
};

export default EditPost;
