import axios from "axios";
import styled from "styled-components";
import { mobile } from "../responsive";
import {useState} from "react";
import {useSelector} from "react-redux";


const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://i.ibb.co/B4pNDjR/jeff-matz-high-on-fire.png?auto=compress&cs=tinysrgb&dpr=2&h=400&w=700")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 40%;
  padding: 20px;
  background-color: white;
  ${mobile({ width: "75%" })}
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 300;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 40%;
  border: none;
  padding: 15px 20px;
  background-color: teal;
  color: white;
  cursor: pointer;
`;

const Error = styled.span`
  color: red;
`


const Register = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const {error}  = useSelector((state) => state.user);

  const handleSubmit = (event) => {
    event.preventDefault()
    signUpRequest()
  }

  const signUpRequest = () => {
    axios.post("http://localhost:3000/api/auth/register", {
      name: name,
      lastname: lastname,
      email: email,
      username: username,
      password: password,
      confirmPassword: confirmPassword
    })
    .then((response) => {
      console.log(response);
    });
  }

  const handleNameChange = (event) =>     {
    setName(event.target.value)
      }
  const handleLastnameChange = (event) => {
      setLastname(event.target.value)
      }
  const handleUsernameChange = (event) => {
    setUsername(event.target.value)
      }
  const handleEmailChange = (event) =>    {
      setEmail(event.target.value)
      }
  const handlePasswordChange = (event) => {
        setPassword(event.target.value)
      }
  const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value)
      }

      
  return (

    
    <Container>
      <Wrapper>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="name"onChange={handleNameChange}/>
          <Input placeholder="last name" onChange={handleLastnameChange}/>
          <Input placeholder="username" onChange={handleUsernameChange}/>
          <div class ="username error"> </div>
          <Input placeholder="email" onChange={handleEmailChange}/>
          <div class ="email error"> </div>
          <Input placeholder="password" onChange={handlePasswordChange}/>
          <Input placeholder="confirm password" onChange={handleConfirmPasswordChange}/>
          <div class ="password error"> </div>
          {error && <Error>passwords must be same...</Error>} 
          <Agreement>
            By creating an account, I consent to the processing of my personal
            data in accordance with the <b>EU PRIVACY POLICY</b>

          </Agreement>
          <Button onClick={handleSubmit}>CREATE</Button>
        </Form>
      </Wrapper>
    </Container>
  );
};


export default Register;
