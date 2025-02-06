import { Button, Card } from 'react-bootstrap';
import { IPost} from '../../types.d.tsx';
import React from 'react';

interface Props {
  post: IPost
}

const BlogPost: React.FC<Props> = ({post}) => {
  return (
    <Card className="mb-4">
      <Card.Body>
        <blockquote className="blockquote mb-0">
         <Card.Title className="mb-3" as="h4">{post.title}</Card.Title>
          <Button className='mb-4' variant="success">Детальный просмотр</Button>
          <footer className="blockquote-footer">
            Дата создания <cite title="Source Title">{new Date (post.time).toLocaleString()}</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
};

export default BlogPost;