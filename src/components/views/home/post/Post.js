import Card from "../../../elements/Card";
import PostContent from "./PostContent";
import PostHeader from "./PostHeader";
import PostReactions from "./PostReactions";

const Post = () => {
  return (
    <Card width="500px" padding="0" feed>
      <PostHeader />
      <PostContent>Placeholder</PostContent>
      <PostReactions />
    </Card>
  );
};

export default Post;
