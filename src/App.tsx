import "./App.scss";
import { Routes, Route, Navigate } from "react-router-dom";
import { PostDetail, Posts } from "./Pages";
import { useEffect, useState } from "react";
import { Header } from "./Components";
import { getListOfPosts, getListOfPostsUsingString, getPostDetail, getPostById } from "./Api";
import { ConsoleProvider } from "./Context";

export interface IDataProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export interface IDetailedPost {
  body: string;
  email: string;
  id: number;
  name: string;
  postId: number;
}

function App() {
  const [searchInputString, setSearchInputString] = useState("");
  const [loading, setLoading] = useState(false);
  const [postListData, setPostListData] = useState<IDataProps[]>();
  const [postDetail, setPostDetail] = useState<IDetailedPost[]>();
  const [postData, setPostData] = useState<IDataProps>();

  const consoleLocation = ({ child }: { child: string }) => {
    const parentConsole = "Hello from ";
    console.log(`${parentConsole}${child}`);
  };

  async function setDataForPostPage(id: string) {
    let response = await getPostById(id);
    let response2 = await getPostDetail(id);
    setPostData(response[0]);
    setPostDetail(response2);
  }

  const onSearch = (search: string) => {
    setSearchInputString(search);
  };
  const showLoader = (loader: boolean) => {
    setLoading(loader);
  };

  useEffect(() => {
    (async () => {
      await fillListOfData(searchInputString, showLoader, setPostListData);
    })();
  }, [searchInputString]);

  const HeaderComponentProp = <Header onSearch={onSearch} searchInputString={searchInputString} />;
  return (
    <div className="App">
      <ConsoleProvider consoleLocation={consoleLocation}>
        <Routes>
          <Route path="/posts" element={<Posts postListData={postListData} loading={loading} /* send header prop to render*/ header={HeaderComponentProp} />} />
          <Route path="/post:id" element={<PostDetail postData={postData} postDetail={postDetail} getPostData={setDataForPostPage} />} />
          <Route path="/*" element={<Navigate to={"/posts"} />} />
        </Routes>
      </ConsoleProvider>
    </div>
  );
}

export default App;

async function fillListOfData(str: string, showLoader: (loader: boolean) => void, setPostListData: React.Dispatch<React.SetStateAction<IDataProps[] | undefined>>) {
  showLoader(true);
  if (str.length) {
    let response = await getListOfPostsUsingString(str);

    setPostListData(response);
  } else {
    let response = await getListOfPosts();

    setPostListData(response);
  }
  showLoader(false);
}
