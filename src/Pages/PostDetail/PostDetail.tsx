import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { IDataProps, IDetailedPost } from "../../App";
import { ConsoleContext } from "../../Context";
import "./PostDetail.scss";

interface IPostDetailProps {
  postData: IDataProps | undefined;
  postDetail: IDetailedPost[] | undefined;
  getPostData(id: string): Promise<void>;
}

export const PostDetail = ({ postDetail, getPostData, postData }: IPostDetailProps) => {
  let { id } = useParams();
  const { parentConsole } = useContext(ConsoleContext);
  const childConsole = `Post${id} route page`;

  useEffect(() => {
    console.log(`${parentConsole}${childConsole}`);
  }, []);

  useEffect(() => {
    if (id) getPostData(id);
  }, [id]);

  return (
    <div>
      <div className="navbar">
        <Link className="navbar__GoBack" to="/posts">
          Go Back
        </Link>
        {postData ? (
          <div className="PostDetail__textContainer" key={postData?.id}>
            <h4 className="PostDetail__textContainer--title">PostId:{postData?.id}</h4>
            <h4>Title:{postData?.title}</h4>
            <p className="PostDetail__textContainer--desc">Body:{postData?.body}</p>
          </div>
        ) : (
          <div className="Posts__loader Posts__loader--small"></div>
        )}
      </div>
      <div className="PostDetail">
        <h2>{postDetail && postDetail.length > 0 ? `Comments:` : null}</h2>
        {postDetail?.map((postObj: IDetailedPost) => {
          return (
            <div className="PostDetail__textContainer" key={postObj.id}>
              <h4 className="PostDetail__textContainer--title">userId:{postObj.id}</h4>
              <h4>Name:{postObj.name}</h4>
              <p>Email:{postObj.email}</p>
              <p className="PostDetail__textContainer--desc">Desc:{postObj.body}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
