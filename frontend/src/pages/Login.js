import { Link } from "react-router-dom";
import styled from "styled-components"
import { mobile } from "../responsive";

const Container = styled.div `
    width: 100vw;
    height: 100vh;

    background: url("https://www.neopolitanpizza.in/images/slider.jpg");

    display: flex;
    align-items: center;
    justify-content: center;
`;

const Wrapper = styled.div `
    width: 25%;
    padding: 20px;
    background-color: white;
    ${mobile({width:"75%"})}
`;

const Form = styled.form `
    display: flex;
    flex-direction : column;
`;

const Title = styled.h1 `
    font-size: 24px;
    font-weight: 300;
`;

const Input = styled.input `
    flex: 1;
    min-width: 40%;
    margin:  10px 0 ;
    padding: 10px;
`;

const Button = styled.button `
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin-bottom: 10px;
`;

const Links = styled.a `
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`;

const Login = () => {
    return (
        <Container>
           <Wrapper>
                <Title>SIGN IN</Title>
                <Form>
                <Input placeholder="username" />
                <Input placeholder="password" />
                <Link to={`/home`}>
                <Button>LOGIN</Button>
                </Link>
                <Links>DO NOT YOU REMEMBER THE PASSWORD?</Links>
                <Link to={`/register`}>
                <Links>CREATE A NEW ACCOUNT</Links>
                </Link>
                </Form>
            </Wrapper> 
        </Container>
    )
}

export default Login
