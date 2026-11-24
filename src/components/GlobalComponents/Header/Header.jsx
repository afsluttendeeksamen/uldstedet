import Banner from "./Banner";
import Basket from "./Basket";
import Logo from "./Logo";
import Menu from "./Menu";
import Search from "./Search";

const Header = () => {
  return (
    <div>
      <Banner />
      <Menu />
      <Logo />
      <Search />
      <Basket />
    </div>
  );
};

export default Header;
