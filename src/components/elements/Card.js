import styled from "styled-components";

const Card = ({ children, radius, padding }) => {
  return (
    <CardWrapper radius={radius} padding={padding}>
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  background-color: white;
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  border-radius: ${(props) => (props.radius ? props.radius : "8px")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
`;

export default Card;
