import React from "react";
import { Container, Form, Button, Row } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { NavLink, useLocation } from "react-router-dom";
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      style={{ height: window.innerHeight - 54 }}
      className="d-flex justify-content-center align-items-center"
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-3" placeholder="Введите почту" />
          <Form.Control className="mt-3" placeholder="Введите пароль" />
          <Row className="d-flex justify-content-between mt-3 pe-3 ps-3">
            {isLogin ? (
              <div>
                Нет аккаунта?
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт?
                <NavLink to={LOGIN_ROUTE}>Войдите</NavLink>
              </div>
            )}
            <Button variant={"outline-success"}>
              {isLogin ? "Войти" : "Регистрация"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default Auth;
