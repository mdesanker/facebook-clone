import Card from "../elements/Card";

const Signin = () => {
  return (
    <div>
      <Card padding="1rem">
        <p> Sign In</p>
        <input type="email" />
        <input type="password" />
        <button>Log In</button>
      </Card>
    </div>
  );
};

export default Signin;
