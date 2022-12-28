export const DeleteReaction = async (postId) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/posts/deleteReaction/${postId}`,
      {
        method: "DELETE",
      }
    );
    const data = await response.json();
    // enter you logic when the fetch is successful
    console.log(data);
  } catch (error) {
    // enter your logic for when there is an error (ex. error toast)

    console.log(error);
  }
};

// fetch("https://example.com/delete-item/" + id, {
//   method: "DELETE",
// })
//   .then((res) => res.text()) // or res.json()
//   .then((res) => console.log(res));
