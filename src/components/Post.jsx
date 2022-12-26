import React, { useState, useEffect } from "react";

function Post(props) {
  const { postData } = props;
  console.log(postData);
  const [style, setStyle] = useState({ display: "none" });
  return (
    <div>
      <div style={{ display: "flex" }}>
        <div style={{ width: "50px", marginRight: "10px" }}>
          <img
            style={{ width: "100%" }}
            src='https://avatars.githubusercontent.com/u/55929607?v=4'
            alt=''
          />
        </div>
        <div>
          <span> Manh Hung Nguyen</span>
          <div>Talent Acquisition Executive at Rikkeisoft</div>
          <div>
            <span>
              <i class='fa-solid fa-globe'></i>
            </span>
          </div>
        </div>
      </div>
      <div style={{ width: "500px" }}>{postData.content}</div>
      <div style={{ width: "500px" }}>
        {postData.postImg !== null ? (
          <img style={{ width: "100%" }} src={postData.postImg} alt='' />
        ) : (
          ""
        )}
      </div>
      <div className='display-like-comment'>
        <span>5 likes</span>
        <span>10 comments</span>
      </div>
      <div className='like-comment-share'>
        <div
          className='like-comment-share__btn'
          onMouseEnter={(e) => {
            setStyle({ display: "block" });
          }}
          onMouseLeave={(e) => {
            setStyle({ display: "none" });
          }}
        >
          <span>
            <i className='fa-solid fa-thumbs-up'></i> Like
          </span>
          <div className='post-reactions' style={style}>
            <div>
              <span>
                <i
                  style={{ color: "#408EE5" }}
                  className='fa-solid fa-thumbs-up'
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "#73AD57" }}
                  className='fa-solid fa-hands-clapping'
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "#F7251C" }}
                  className='fa-solid fa-heart'
                ></i>
              </span>
              <span>
                <i
                  style={{ color: "#F8C035" }}
                  className='fa-solid fa-face-laugh-squint'
                ></i>
              </span>

              <span>
                <i
                  style={{ color: "#980202" }}
                  className='fa-solid fa-thumbs-down'
                ></i>
              </span>
            </div>
          </div>
        </div>
        <div className='like-comment-share__btn'>
          <span>
            <i className='fa-solid fa-comment'></i> Comment
          </span>
        </div>
        <div className='like-comment-share__btn'>
          <span>
            <i className='fa-solid fa-share'></i> Share
          </span>
        </div>
      </div>
    </div>
  );
}

export default Post;
