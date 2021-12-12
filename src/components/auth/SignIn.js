import styled from "styled-components";
import Button from "../elements/Button";
import Card from "../elements/Card";

const Signin = () => {
  return (
    <Card padding="1rem">
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="button" text="Sign In" primary />
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
