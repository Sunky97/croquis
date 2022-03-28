import styled from "styled-components";

const SupportWrap = styled.div`
  width: 100%;
  border-top: 1px solid #e5e6e9;
  border-bottom: 1px solid #e5e6e9;

  background-color: #f2f6fc;
  text-align: center;
  @media screen and (min-width: 1024px) {
    display: flex;
    height: 800px;
  }

  @media screen and (min-width: 768px) and (max-width: 1023px) {
    display: inline-block;
    height: 700px;
  }

  @media screen and (max-width: 767px) {
    height: 700px;
  }
`;

const Support = () => {
  return (
    <SupportWrap>
      <h2>개발중입니다</h2>
    </SupportWrap>
  );
};

export default Support;
