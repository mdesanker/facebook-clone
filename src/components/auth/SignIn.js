import styled from "styled-components";
import Card from "../elements/Card";

const Signin = () => {
  return (
    <Card padding="1rem">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <button>Log In</button>
    </Card>
  );
};

const Input = styled.input`
  font-size: 1rem;
  padding: 0.5rem;
  width: 360px;
  border: 1px solid lightgray;
  border-radius: 5px;
  margin: 0 0 0.5rem;
`;

export default Signin;
