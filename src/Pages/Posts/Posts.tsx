import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { IDataProps } from "../../App";
import { ConsoleContext } from "../../Context";
import { withLanding } from "../../HOC/Landing";
import "./Posts.scss";

interface IPostProps {
  loading: boolean;
  postListData: IDataProps[] | undefined;
}
export const Posts = withLanding(({ loading, postListData }: IPostProps) => {
  const { parentConsole } = useContext(ConsoleContext);
  const childConsole = "Posts route page";

  useEffect(() => {
    console.log(`${parentConsole}${childConsole}`);
  }, []);

  return (
    <>
      {postListData && !loading ? (
        <div className="Posts">
          {postListData.map((postObj: IDataProps) => {
            return (
              <Link className="Posts__textContainer" key={postObj.id} to={`/post${postObj.id}`}>
                <h3 className="Posts__textContainer--title">PostId:{postObj.id}</h3>
                <h4>UserId:{postObj.userId}</h4>
                <h4>Title:{postObj.title}</h4>
                <p className="Posts__textContainer--desc">Body:{postObj.body}</p>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="Posts__loader"></div>
      )}
    </>
  );
});
