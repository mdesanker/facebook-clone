import styled from "styled-components";

const SearchBtn = () => {
  return (
    <BtnWrapper>
      <i className="fas fa-search" />
    </BtnWrapper>
  );
};

const BtnWrapper = styled.button`
  height: 40px;
  width: 40px;
  font-size: 20px;
  color: gray;
  border: none;
  border-radius: 50%;
  cursor: pointer;
`;

export default SearchBtn;
