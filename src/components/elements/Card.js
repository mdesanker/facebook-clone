import styled, { css } from "styled-components";

const Card = ({ children, radius, padding, width, feed, custom }) => {
  return (
    <CardWrapper
      radius={radius}
      padding={padding}
      width={width}
      feed={feed}
      custom={custom}
    >
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: ${(props) => (props.absolute ? "absolute" : "static")};
  background-color: white;
  padding: ${(props) => (props.padding ? props.padding : "1rem")};
  border-radius: ${(props) => (props.radius ? props.radius : "8px")};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15), 0 8px 16px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.width &&
    css`
      width: ${props.width};
    `}

  ${(props) =>
    props.feed &&
    css`
      box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
    `}

    ${(props) =>
    props.custom &&
    css`
      ${props.custom}
    `}
`;

export default Card;
