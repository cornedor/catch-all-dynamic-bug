import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("./Menu"));

const Wrapper = styled.main`
  background: #ff9191;
  font-size: 20px;
`;

const PageA = () => {
  return (
    <Wrapper>
      <Menu />
      This is page A.
    </Wrapper>
  );
};

export default PageA;
