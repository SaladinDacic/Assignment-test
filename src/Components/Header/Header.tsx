import { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { ConsoleContext } from "../../Context";
import { throttle } from "../../Utility";
import "./Header.scss";

export interface HeaderProps {
  onSearch: (search: string) => void;
  searchInputString: string;
}
export const Header = ({ onSearch, searchInputString }: HeaderProps) => {
  const { parentConsole } = useContext(ConsoleContext);
  const childConsole = "Header where Search is located";

  useEffect(() => {
    console.log(`${parentConsole}${childConsole}`);
  }, []);

  return (
    <div className="Header">
      <div className="Header__tabs">
        <NavLink className="inactive" to="/posts">
          Home
        </NavLink>
      </div>
      <div className="Header__search">
        <h4>Search Posts</h4>
        <div className="Header__search--inputAndIcon">
          <input
            onChange={(evt) => {
              throttle(onSearch, evt.target.value);
            }}
            name="search"
            value={searchInputString}
          />
        </div>
      </div>
    </div>
  );
};
