import { Card } from "react-bootstrap";
import { IPost } from "../../types.d.tsx";
import React from "react";
import { Link } from "react-router-dom";

interface Props {
  post: IPost;
}

const BlogPost: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Card className="mb-4">
        <Card.Body>
          <blockquote className="blockquote mb-0">
            <Card.Title className="mb-3" as="h4">
              {post.title}
            </Card.Title>
            <Link className="btn btn-primary mb-4" to={`/posts/${post.id}`}>
              Детальный просмотр
            </Link>
            <footer className="blockquote-footer">
              Дата создания{" "}
              <cite title="Source Title">
                {new Date(post.time).toLocaleString()}
              </cite>
            </footer>
          </blockquote>
        </Card.Body>
      </Card>
    </>
  );
};

export default BlogPost;
