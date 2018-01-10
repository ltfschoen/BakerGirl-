import React from 'react';
import Comment from './Comment'

export default function Cake(props) {
  const { title, yearReleased, director, comments } = props;
  return (
    <div className="cake">
      <span>
        Title: {title}
      </span>
      <span>Year: {yearReleased}</span>
      {director && <span>Director: {director.firstName} {director.lastName}</span>}
      <div>
        {
          comments ? (
            comments.map(comment => (
              <Comment key={comment._id}>
                {comment.body}
              </Comment>
            ))
          ) : ('No Comments')
        }
      </div>
    </div>
  )
}