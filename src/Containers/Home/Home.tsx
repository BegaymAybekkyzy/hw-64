import { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi.ts";
import { IPost, IPostAPI } from "../../types.d.tsx";
import Loader from "../../components/Loader/Loader.tsx";
import BlogPost from "../../components/BlogPost/BlogPost.tsx";
import { Outlet, useNavigate } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IPostAPI>("blog.json");
      const postKeys = Object.keys(response.data);
      const postsArray = postKeys.map((key) => {
        return {
          id: key,
          ...response.data[key],
        };
      });
      setPosts(postsArray);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
  }, [navigate, fetchPosts]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-7">
          {loading ? (
            <Loader />
          ) : posts.length > 0 ? (
            posts.map((post) => <BlogPost key={post.id} post={post} />)
          ) : (
            <p>Нет постов</p>
          )}
        </div>

        <div className="col-5">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;
