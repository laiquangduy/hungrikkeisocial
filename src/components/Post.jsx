import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { set } from "react-hook-form";

function Post(props) {
  const { postData } = props;
  // console.log(postData.postId);
  const [style, setStyle] = useState({ display: "none" });
  const [like, setLike] = useState({
    status: false,
    color: "#408EE5",
    icon: "fa-solid fa-thumbs-up",
    name: "Like",
    default: true,
  });
  const [clap, setClap] = useState({
    status: false,
    color: "#73AD57",
    icon: "fa-solid fa-hands-clapping",
    name: "Clap",

    default: false,
  });
  const [heart, setHeart] = useState({
    status: false,
    color: "#F7251C",
    icon: "fa-solid fa-heart",
    name: "Love",
    default: false,
  });
  const [haha, setHaha] = useState({
    status: false,
    color: "#F8C035",
    icon: "fa-solid fa-face-laugh-squint",
    name: "Haha",
    default: false,
  });
  const [dislike, setDislike] = useState({
    status: false,
    color: "#980202",
    icon: "fa-solid fa-thumbs-down",
    name: "Dislike",
    default: false,
  });
  const reactState = [like, clap, heart, haha, dislike];

  const handleClick = (e) => {
    if (e.target.id === "like") {
      setLike({
        ...like,
        status: true,
        default: true,
      });
      setClap({
        ...clap,
        status: false,
        default: false,
      });
      setHeart({
        ...heart,
        status: false,
        default: false,
      });
      setHaha({
        ...haha,
        status: false,
        default: false,
      });
      setDislike({
        ...dislike,
        status: false,
        default: false,
      });
    } else if (e.target.id === "clap") {
      setLike({
        ...like,
        status: false,
        default: false,
      });
      setClap({
        ...clap,
        status: true,
        default: true,
      });
      setHeart({
        ...heart,
        status: false,
        default: false,
      });
      setHaha({
        ...haha,
        status: false,
        default: false,
      });
      setDislike({
        ...dislike,
        status: false,
        default: false,
      });
    } else if (e.target.id === "heart") {
      setLike({
        ...like,
        status: false,
        default: false,
      });
      setClap({
        ...clap,
        status: false,
        default: false,
      });
      setHeart({
        ...heart,
        status: true,
        default: true,
      });
      setHaha({
        ...haha,
        status: false,
        default: false,
      });
      setDislike({
        ...dislike,
        status: false,
        default: false,
      });
    } else if (e.target.id === "haha") {
      setLike({
        ...like,
        status: false,
        default: false,
      });
      setClap({
        ...clap,
        status: false,
        default: false,
      });
      setHeart({
        ...heart,
        status: false,
        default: false,
      });
      setHaha({
        ...haha,
        status: true,
        default: true,
      });
      setDislike({
        ...dislike,
        status: false,
        default: false,
      });
    } else if (e.target.id === "dislike") {
      setLike({
        ...like,
        status: false,
        default: false,
      });
      setClap({
        ...clap,
        status: false,
        default: false,
      });
      setHeart({
        ...heart,
        status: false,
        default: false,
      });
      setHaha({
        ...haha,
        status: false,
        default: false,
      });
      setDislike({
        ...dislike,
        status: true,
        default: true,
      });
    }
    console.log(like, dislike, haha, heart, clap);
  };
  const handleClickPost = (e) => {
    if (e.target.id === "Love" && heart.status) {
      setHeart({
        ...heart,
        status: !heart.status,
        default: true,
      });
    } else if (e.target.id === "Clap" && clap.status) {
      setClap({
        ...clap,
        status: !clap.status,
        default: true,
      });
    } else if (e.target.id === "Haha" && haha.status) {
      setHaha({
        ...haha,
        status: !haha.status,
        default: true,
      });
    } else if (e.target.id === "Dislike" && dislike.status) {
      setDislike({
        ...dislike,
        status: !dislike.status,
        default: true,
      });
    } else {
      setLike({
        ...like,
        status: !like.status,
        default: true,
      });
      setClap({
        ...clap,
        default: false,
      });
      setHeart({
        ...heart,
        default: false,
      });
      setHaha({
        ...haha,
        default: false,
      });
      setDislike({
        ...dislike,
        default: false,
      });
    }
  };
  return (
    <div className='block'>
      <div style={{ display: "flex" }}>
        <div style={{ width: "10%", marginRight: "10px" }}>
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
      <div style={{ width: "100%" }}>{postData.content}</div>
      <div style={{ width: "100%" }}>
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
          {reactState.map((e, i) => {
            if (e.status) {
              return (
                <span
                  onClick={handleClickPost}
                  id={e.name}
                  style={{ color: e.color }}
                >
                  <i id={e.name} className={e.icon}></i> {e.name}
                </span>
              );
            } else if (e.default) {
              return (
                <span
                  onClick={handleClickPost}
                  id={e.name}
                  style={{ color: "#666666" }}
                >
                  <i id={e.name} className='fa-solid fa-thumbs-up'></i> Like
                </span>
              );
            }
          })}

          <div className='post-reactions' style={style}>
            <div>
              <span id='like' onClick={handleClick}>
                <i
                  id='like'
                  style={{ color: "#408EE5" }}
                  className='fa-solid fa-thumbs-up'
                ></i>
              </span>
              <span id='clap' onClick={handleClick}>
                <i
                  id='clap'
                  style={{ color: "#73AD57" }}
                  className='fa-solid fa-hands-clapping'
                ></i>
              </span>
              <span id='heart' onClick={handleClick}>
                <i
                  id='heart'
                  style={{ color: "#F7251C" }}
                  className='fa-solid fa-heart'
                ></i>
              </span>
              <span id='haha' onClick={handleClick}>
                <i
                  id='haha'
                  style={{ color: "#F8C035" }}
                  className='fa-solid fa-face-laugh-squint'
                ></i>
              </span>

              <span id='dislike' onClick={handleClick}>
                <i
                  id='dislike'
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
