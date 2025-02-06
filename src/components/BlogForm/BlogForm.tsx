import { Button, Form } from 'react-bootstrap';
import React, { useState } from 'react';
import { IPostForm } from '../../types.d.tsx';

interface Props {
  isEdit?: boolean;
  onSubmitFunction: (post: IPostForm) => void;
}

const BlogForm: React.FC<Props> = ({isEdit = false, onSubmitFunction}) => {
  const [form, setForm] = useState<IPostForm>({
    title: '',
    description: '',
    time: '',
  });

  const onSubmitForm = (e:React.FormEvent) => {
    e.preventDefault();
    onSubmitFunction({...form});
    console.log(new Date (form.time).toLocaleString());
    setForm({
      title: '',
      description: '',
      time: '',
    });
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {value, name} = e.target;
    setForm({...form, [name]: value, time: String(new Date())});
  };


  return (
    <Form onSubmit={onSubmitForm} className=''>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Label>Заголовок</Form.Label>
        <Form.Control
          type="text"
          onChange={onChangeInput}
          value={form.title}
          name="title"
          required
          placeholder="Введите заголовок" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Описание</Form.Label>
        <Form.Control
          as="textarea"
          name="description"
          onChange={onChangeInput}
          value={form.description}
          required
          placeholder="Введите описание"
          rows={3} />
      </Form.Group>

      <Button type="submit" variant="primary">{isEdit ? "Редактировать" : "Создать"}</Button>
    </Form>
  );
};

export default BlogForm;