import { Button, Card } from 'react-bootstrap';
import React from 'react';

interface Props {
  title: string;
  imagePath: string;
  text: string;
  phone: number;
}

const EmployeeCards: React.FC<Props> = ({title, imagePath, text, phone}) => {
  return (
    <Card
      className="text-center"
      style={{ width: '300px' }}>
      <div style={{height: '300px' }}>
        <Card.Img
          variant="top"
          style={{maxHeight: "300px"}}
          className="object-fit-cover "
          src={imagePath} />
      </div>
      <Card.Body className="d-grid">
        <Card.Title>{title}</Card.Title>
        <Card.Text>{text}</Card.Text>
        <Card.Text>Номер телефона:  {phone}</Card.Text>
        <Button variant="info">Позвонить</Button>
      </Card.Body>
    </Card>
  );
};

export default EmployeeCards;