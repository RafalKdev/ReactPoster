import classes from "./NewPost.module.css";
const NewPost = () => {
  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" required rows={5} />
      </p>
      <p>
        <label htmlFor="name">Yor name</label>
        <input type="text" id="name" required></input>
      </p>
    </form>
  );
};

export default NewPost;
