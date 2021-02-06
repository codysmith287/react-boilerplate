import React from "react";
import styled from "styled-components";

const LoginScreen = () => {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(e.target[0].value, e.target[1].value);
    // make API call here
  };

  return (
    <LoginScreenGrid>
      <Header>
        <HeaderText>Header</HeaderText>
      </Header>
      <LoginFormContainer>
        <LoginForm name="Login" onSubmit={handleSubmit}>
          <LoginHeaderText>Member Log In</LoginHeaderText>
          <FormInputContainer>
            <FormLabel>Username</FormLabel>
            <FormInput
              name="username"
              id="username"
              required
              placeholder="Enter your email"
            />
          </FormInputContainer>
          <FormInputContainer>
            <FormLabel>Password</FormLabel>
            <FormInput
              type="password"
              name="password"
              id="password"
              required
              placeholder="Enter your password"
            />
          </FormInputContainer>
          <SubmitButton type="submit">Log In</SubmitButton>
        </LoginForm>
      </LoginFormContainer>
      <Footer>
        <FooterText>Footer</FooterText>
      </Footer>
    </LoginScreenGrid>
  );
};

const LoginScreenGrid = styled.div`
  height: 100vh;
  display: grid;
  grid-template-rows: 90px 1fr 45px;
  gird-template-columns: 1fr;
`;
const Header = styled.nav`
  gird-area: 1 / 1 / span 1 / span 1;
  border: 2px solid purple;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const HeaderText = styled.h1`
  font-size: 48px;
  color: peru;
`;
const LoginFormContainer = styled.main`
  height: 100%;
  grid-area: 2 / 1 / span 1 / span 1;
  border: 2px solid blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const LoginForm = styled.form`
  height: 455px;
  width: 499px;
  background-color: #175f6e;
  padding: 32px 50px;
  border-radius: 4px;
`;
const LoginHeaderText = styled.h2`
  font-size: 30px;
  font-weight: bold;
  letter-spacing: 0;
  line-height: 50px;
  color: #bde2e9;
`;
const FormInputContainer = styled.div`
  margin-top: 26px;
  display: flex;
  flex-direction: column;
`;
const FormLabel = styled.label`
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 0;
  line-height: 19px;
`;
const FormInput = styled.input`
  max-height: 50px;
  width: 400px;
  border: 1px solid #ececee;
  border-radius: 4px;
  background-color: rgba(255, 255, 255, 1);
  margin-bottom: 6px;
  color: rgba(15, 13, 40, 0.75);
  font-size: 16px;
  letter-spacing: 0;
  padding: 13px 12px;

  &:focus {
    outline: none;
  }
`;
const SubmitButton = styled.button`
  height: 50px;
  width: 200px;
  border-radius: 5px;
  background-color: #d44325;
  margin-top: 30px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 0.5px;
  line-height: 24px;
  text-align: center;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  padding: 12px 0;
  &focus {
    outline: none;
  }
`;
const Footer = styled.div`
  grid-area: 3 / 1 / span 1 / span 1;
  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const FooterText = styled.h1`
  font-size: 36px;
  color: green;
`;

export default LoginScreen;
