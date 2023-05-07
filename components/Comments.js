import { useEffect } from "react";
import commentBox from "commentbox.io";

function Comments() {
  useEffect(() => {
    const removeCommentBox = commentBox("5640342153986048-proj");
    return () => removeCommentBox();
  }, []);

  return <div className="commentbox" />;
}

export default Comments;
