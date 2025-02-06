import { useCallback, useEffect, useState } from 'react';
import axiosApi from '../../axiosApi.ts';
import { IPost, IPostAPI } from '../../types.d.tsx';
import Loader from '../../components/Loader/Loader.tsx';
import BlogPost from '../../components/BlogPost/BlogPost.tsx';


const Home = () => {
  const [posts, setPosts] = useState<IPost[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi<IPostAPI>("blog.json");
      const postKeys = Object.keys(response.data);
      const postsArray = postKeys.map((key) => {
        return {
          id: key,
          ...
            response.data[key],
        };
      });

      console.log(postsArray);
      setPosts(postsArray);
      console.log(postKeys);
      console.log(response);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    void fetchPosts();
    }, [fetchPosts]);


  return (
    <div className="container">
      {loading ? <Loader/>
        : posts.length > 0 ?
          posts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))
          : <p>Нет постов</p>
      }
    </div>
  );
};

export default Home;