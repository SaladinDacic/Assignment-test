import axios from "axios";

export async function getListOfPosts() {
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getListOfPostsUsingString(str: string) {
  try {
    let response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data.filter((obj: any) => {
      return obj?.title.includes(str);
    });
  } catch (error) {
    console.log(error);
  }
}
export async function getPostById(id: number | string) {
  try {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/posts?id=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
export async function getPostDetail(id: string | number) {
  try {
    let response = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`);
    return response.data;
  } catch (error) {
    console.log(error);
  }
}
