import "./post.css";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InsertCommentIcon from "@mui/icons-material/InsertComment";
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FavoriteIcon from '@mui/icons-material/Favorite';
export default function Post() {
  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postProfileImg"
              src="/assets/person/person8.jpeg"
              alt="..."
            />
            <span className="postUserName">Deniz Yurdum</span>
            <span className="postDate">5 gün önce.</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon className="postIcon" />
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">Selam! Bu benim ilk gönderim.</span>
         
          <img className="postImage" src="/assets/post/post4.jpeg" alt="..." />
        
        
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <div className="likeIcons">
            <FavoriteIcon htmlColor="red" className="likeIcon"/>
           < ThumbUpIcon htmlColor="blue"className="likeIcon"/>
          
            </div>
     
           
          </div>
          <div className="postBottomRight">
            <div>
            <span className="postLikeCounter">1M Beğeni</span>
            </div>
            
                <div className="postCount">
                <InsertCommentIcon className="postCommentIcon" />
           
           <span className="postCommentText">688 Yorum</span>
                </div>
    
          </div>
        </div>
      </div>
    </div>
  );
}
