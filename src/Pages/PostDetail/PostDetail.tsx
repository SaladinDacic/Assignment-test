import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPostDetail } from "../../Api";
import { IDetailedPost } from "../../App";
import { ConsoleContext } from "../../Context";
import "./PostDetail.scss";

interface IPostDetailProps {
  postDetail: IDetailedPost[] | undefined;
  getPostData(id: string): Promise<void>;
}

export const PostDetail = ({ postDetail, getPostData }: IPostDetailProps) => {
  let { id } = useParams();
  const { parentConsole } = useContext(ConsoleContext);
  const childConsole = `Post${id} route page`;

  useEffect(() => {
    console.log(`${parentConsole}${childConsole}`);
  }, []);

  useEffect(() => {
    if (id) getPostData(id);
  }, [postDetail]);
  return (
    <>
      <Link className="GoBack" to="/posts">
        Go Back
      </Link>
      <div className="PostDetail">
        <h1>{postDetail && postDetail.length > 0 ? `PostId ${postDetail[0].postId} - Comments:` : null}</h1>
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
    </>
  );
};
