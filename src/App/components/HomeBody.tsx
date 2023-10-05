import {Button, Card, CardImg, Container, Form} from "react-bootstrap";
import {useContext} from "react";
import {UserContext} from "../context/userDetails";
import people from '../assets/icon/people.svg'
import {useForm} from 'react-hook-form'
import {IUser} from "../types.username";

const HomeBody = () => {
    const {user, setUser} = useContext(UserContext)
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm()
    const onSubmit = (data:any) => {
        console.log(data)
        console.log(user)
        const _:IUser = {
            username: user?.username,
            email: data.email
        }
        if (setUser) {
            setUser(_)
        }
    }
    return (
        <Container>
            <Card className="shadow ms-auto me-auto mt-5" style={{width: '30rem'}}>
                <CardImg className="m-3" src={people} width={50} height={50}></CardImg>
                <Card.Body>
                    <code>Имя:</code>
                    {user && <Card.Text>{user?.username}</Card.Text>}
                    {user?.email &&
                        <>
                            <code>Почта:</code>
                            <Card.Text>{user?.email}</Card.Text>
                        </>
                    }
                </Card.Body>
                <Card.Footer>
                    <Form className="m-2" onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group>
                            <Form.Label>Адрес электронной почты</Form.Label>
                            <Form.Control type="email"
                                          isInvalid={!!errors.email}
                                          {...register("email", {
                                              required: true,
                                              pattern: /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
                                          })}
                                          placeholder='Введите адрес электронной почты'></Form.Control>
                            {errors.email && errors.email.type === "required" && <Form.Text className="error">Обязательное поле</Form.Text>}
                            {errors.email && errors.email.type === "pattern" && <Form.Text className="error">Введите корректный адрес</Form.Text>}
                        </Form.Group>
                        <Button className="mt-3" variant="outline-primary" type="submit">Сохранить</Button>
                    </Form>
                </Card.Footer>
            </Card>
        </Container>
    )
}
export default HomeBody