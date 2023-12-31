
import { FaStar } from 'react-icons/fa'



const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Ratings Yet</h3>;
  }

  return (
    <div>
      <h3
        className="p-5 display-inline-block"
        style={{ borderBottom: '1px dotted #1a1a1a' }}
      >
        Ratings
      </h3>
      <div className="flex-row my-4">
     
        {comments &&
          comments.map((comment) => (          
            <div key={comment._id} className="col-12 mb-3 pb-3">
              <div className="p-3 bg-dark text-light">
                <span style={{ display: 'inline-flex', fontSize: '2rem', alignContent: 'center' }}>
                   {[...Array(comment.commentRating)].map((star, index) =>
                   <FaStar
                     className='star'
                     size={30}
                     color={"#ffc107"}
                     key={index}
                    />
                   )} &nbsp;
                </span>
                <h5 className="card-header">
                  {comment.commentAuthor} rated {''}
                  <span style={{ fontSize: '0.825rem' }}>
                    on {comment.createdAt}
                  </span>
                </h5>
                <p className="card-body">{comment.commentText}</p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CommentList;
