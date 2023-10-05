import {Button, Container, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import {useContext} from "react";
import {UserContext} from "../context/userDetails";
import {useNavigate} from "react-router-dom";

const LoginPage = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()
    const { user, setUser } = useContext(UserContext)
    const navigate = useNavigate()
    const onSubmit = (data:any) => {
        const _ = {
            username: data.username
        }
        localStorage.setItem('user', JSON.stringify(_))
        if (setUser) {
            setUser(_)
        }
        navigate('/')

    }

    return (
        <Container className="d-flex flex-column" style={{height: '100%'}}>
            <Form className="mt-auto mb-auto mx-auto border p-3 shadow rounded" style={{width: '30rem'}} onSubmit={handleSubmit(onSubmit)}>
                <Form.Group>
                    <h2><code>React useContext</code></h2>
                    <Form.Label>Имя пользователя</Form.Label>
                    <Form.Control type="text"
                                  placeholder='Введите имя пользователя...'
                                  isInvalid={!!errors.username}
                                  {...register("username", {
                                      required: true
                                  })}>

                    </Form.Control>
                    {errors.username && errors.username.type === "required" && <Form.Text className="error">Обязательное поле</Form.Text>}
                </Form.Group>
                <Button className="mt-3" type="submit" variant="outline-primary">Далее</Button>
            </Form>
        </Container>
    )
}

export default LoginPage