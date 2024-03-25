import Post from "./Post";
import NewPost from "./NewPost";
import classses from "./PostList.module.css";
const PostList = () => {
  return (
    <>
      <NewPost />
      <ul className={classses.posts}>
        <Post author="Kuna" body="FC Barcelona" />
        <Post author="Kuna" body="Leo Messi" />
      </ul>
    </>
  );
};
export default PostList;
