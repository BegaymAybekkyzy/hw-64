import { Button, Form } from "react-bootstrap";
import React, { useCallback, useEffect, useState } from "react";
import { IPostForm } from "../../types.d.tsx";
import axiosApi from "../../axiosApi.ts";
import { toast } from "react-toastify";
import Loader from "../Loader/Loader.tsx";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  isEdit?: boolean;
  id?: string;
  onSubmitFunction: (post: IPostForm) => void;
}

const BlogForm: React.FC<Props> = ({
  isEdit = false,
  onSubmitFunction,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [form, setForm] = useState<IPostForm>({
    title: "",
    description: "",
    time: "",
  });

  const postEditing = useCallback(async () => {
    if (!id) return;
    try {
      setLoading(true);
      const response = await axiosApi.get<IPostForm>(`blog/${id}.json`);
      setForm(response.data);
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  }, [id, navigate]);

  useEffect(() => {
    void postEditing();
  }, [postEditing]);

  const onSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmitFunction({ ...form });

    if (isEdit) {
      toast.success("Редактирование успешно");
    }
    setForm({
      title: "",
      description: "",
      time: "",
    });
  };

  const onChangeInput = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { value, name } = e.target;
    setForm({ ...form, [name]: value, time: String(new Date()) });
  };

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <Form onSubmit={onSubmitForm} className="">
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Заголовок</Form.Label>
            <Form.Control
              type="text"
              onChange={onChangeInput}
              value={form.title}
              name="title"
              required
              placeholder="Введите заголовок"
            />
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
              rows={3}
            />
          </Form.Group>

          <Button type="submit" variant="primary">
            {isEdit ? "Редактировать" : "Создать"}
          </Button>
          <Link className="btn btn-dark ms-3" to="/">
            Отмена
          </Link>
        </Form>
      )}
    </>
  );
};

export default BlogForm;
