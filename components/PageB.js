import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("./Menu"));

const Wrapper = styled.main`
  background: #a591ff;
  font-size: 20px;
`;

const PageB = () => {
  return (
    <Wrapper>
      <Menu />
      This is page B.
    </Wrapper>
  );
};

export default PageB;
