export const SendReaction = async (postId, reactionType, reactionOf) => {
  try {
    const response = await fetch(
      `http://127.0.0.1:8000/api/v1/posts/sendReaction/${postId}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          reactionType,
          reactionOf,
        }),
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
