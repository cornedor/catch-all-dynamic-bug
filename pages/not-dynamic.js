import dynamic from "next/dynamic";

const Menu = dynamic(() => import("../components/Menu"));

const NotDynamic = () => {
  return (
    <div>
      <Menu />
      Only the menu above is dynamic
    </div>
  );
};

export default NotDynamic;
