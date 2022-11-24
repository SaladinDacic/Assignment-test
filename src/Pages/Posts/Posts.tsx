import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPostDetail } from "../../Api";
import { IDataProps } from "../../App";
import { ConsoleContext } from "../../Context";
import { withLanding } from "../../HOC/Landing";
import "./Posts.scss";

interface IPostProps {
  loading: boolean;
  postListData: IDataProps[] | undefined;
}
interface IPostComments {
  body: string;
  name: string;
}
export const Posts = withLanding(({ loading, postListData }: IPostProps) => {
  const { consoleLocation } = useContext(ConsoleContext);
  const childConsole = "Posts route page";
  const [expandedPosts, setExpandedPosts] = useState<{ [key: string]: any }>({});

  const expandThisPost = async (postId: number) => {
    const response = (await getPostDetail(postId)) as IPostComments[];
    setExpandedPosts((oldState) => {
      const newState = { ...oldState };
      newState[postId] = response || [];
      return newState;
    });
  };
  const subtractThisPost = (postId: number) => {
    setExpandedPosts((oldState) => {
      const newState = { ...oldState };
      delete newState[postId];
      return newState;
    });
  };
  const shouldExpand = (postId: number) => {
    return Object.keys(expandedPosts).includes("" + postId);
  };

  useEffect(() => {
    consoleLocation({ child: childConsole });
  }, []);

  return (
    <>
      {postListData && !loading ? (
        <div className="Posts">
          {postListData.map((postObj: IDataProps, idx: number) => {
            return (
              <div key={idx}>
                <Link className="Posts__textContainer" key={postObj.id} to={`/post${postObj.id}`}>
                  <h3 className="Posts__textContainer--title">PostId:{postObj.id}</h3>
                  <h4>UserId:{postObj.userId}</h4>
                  <h4>Name:{postObj.title}</h4>
                  <p className="Posts__textContainer--desc">Body:{postObj.body}</p>
                </Link>
                <hr />
                <Comments expandedPosts={expandedPosts} postObj={postObj} shouldExpand={shouldExpand} expandThisPost={expandThisPost} subtractThisPost={subtractThisPost} />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="Posts__loader"></div>
      )}
    </>
  );
});

interface ICommentsFragment {
  expandedPosts: {
    [key: string]: any;
  };
  postObj: IDataProps;
  expandThisPost: (postId: number) => Promise<void>;
  subtractThisPost: (postId: number) => void;
  shouldExpand: (postId: number) => boolean;
}

const Comments = ({ shouldExpand, expandedPosts, postObj, subtractThisPost, expandThisPost }: ICommentsFragment) => {
  return (
    <>
      {shouldExpand(postObj.id) ? (
        <div>
          {expandedPosts[postObj.id].length ? (
            expandedPosts[postObj.id].map((obj: IPostComments, idx: number) => {
              return (
                <div key={idx}>
                  <h3>{obj.name} ▸ said:</h3>
                  <p>{obj.body}</p>
                </div>
              );
            })
          ) : (
            <div className="Posts__loader Posts__loader--small"></div>
          )}
          <h2
            onClick={() => {
              subtractThisPost(postObj.id);
            }}
          >
            Hide Comments ▲
          </h2>
        </div>
      ) : (
        <h2
          onClick={() => {
            expandThisPost(postObj.id);
          }}
        >
          Show Comments ▼
        </h2>
      )}
    </>
  );
};
