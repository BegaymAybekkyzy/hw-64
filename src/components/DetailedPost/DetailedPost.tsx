import { Button, Card } from "react-bootstrap";
import { Link, useNavigate, useParams } from "react-router-dom";
import React, { useCallback, useEffect, useState } from "react";
import axiosApi from "../../axiosApi.ts";
import { IPost } from "../../types.d.tsx";
import Loader from "../Loader/Loader.tsx";

const DetailedPost = () => {
  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState<IPost | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const fetchOnePost = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axiosApi.get(`blog/${id}.json`);
      setPost(response.data);
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    void fetchOnePost();
  }, [fetchOnePost]);

  const onDeletePost = async () => {
    try {
      setLoading(true);
      await axiosApi.delete(`blog/${id}.json`);
      navigate("/");
    } catch (e) {
      alert(e);
    } finally {
      setLoading(false);
    }
  };

  let content: React.ReactNode;

  if (loading) content = <Loader />;

  if (!loading) {
    if (post) {
      content = (
        <Card>
          <Card.Body>
            <Card.Text className="fs-5">
              <span className="fw-medium">Заголовок:</span> {post.title}
            </Card.Text>
            <Card.Text>
              <b className="fs-5 fw-medium d-block">Описание:</b>{" "}
              {post.description}
            </Card.Text>
            <Card.Text>
              <b>Дата создания:</b> {new Date(post.time).toLocaleString()}
            </Card.Text>
            <Link className="btn btn-primary me-2" to="edit">
              Редактировать
            </Link>
            <Button variant="danger" className="me-2" onClick={onDeletePost}>
              Удалить
            </Button>
            <Link className="btn btn-dark" to="/">
              Отмена
            </Link>
          </Card.Body>
        </Card>
      );
    }
  }

  return <div className="container">{content}</div>;
};

export default DetailedPost;
