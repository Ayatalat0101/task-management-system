const getPosts = async () => {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/posts"
    );

    console.log("Status:", response.status);

    const posts = await response.json();

    console.log(
      "Total Posts:",
      posts.length
    );

    posts
      .slice(0, 5)
      .forEach((post, index) => {
        console.log(
          `${index + 1}- ${post.title}`
        );
      });

  } catch (error) {
    console.log(error);
  }
};

getPosts();