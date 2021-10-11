import React from 'react'

const Comment = ({comment, setComment, handleAddComment, id}) => {
    return (
        <div>
            <div className="add-comment">
              <textarea rows='1' placeholder='Add a comment' value={comment} onChange={e => setComment(e.target.value)}></textarea>
              <button className='add-comment-btn' onClick={() => handleAddComment(id)}>Add</button>
            </div>
        </div>
    )
}

export default Comment
