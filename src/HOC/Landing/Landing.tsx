import { useContext, useEffect } from "react";
import { IDataProps } from "../../App";
import { ConsoleContext } from "../../Context";
import "./Landing.scss";

interface ILandingProps {
  header: JSX.Element;
  postListData: IDataProps[] | undefined;
  loading: boolean;
}
export const withLanding = (OldComponent: any) => {
  const Landing = (props: ILandingProps) => {
    const { parentConsole } = useContext(ConsoleContext);
    const childConsole = "withLanding HOC";

    useEffect(() => {
      console.log(`${parentConsole}${childConsole}`);
    }, []);

    return (
      <div className="Landing">
        {props.header}
        <OldComponent {...props} />
      </div>
    );
  };
  return Landing;
};
