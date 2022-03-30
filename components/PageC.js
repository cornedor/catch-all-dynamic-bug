import styled from "@emotion/styled";
import dynamic from "next/dynamic";

const Menu = dynamic(() => import("./Menu"));

const Wrapper = styled.main`
  background: #91ff9e;
  font-size: 20px;
`;

const PageC = () => {
  return (
    <Wrapper>
      <Menu />
      This is page C.
    </Wrapper>
  );
};

export default PageC;
