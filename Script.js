const commentList = document.getElementById("commentList");
const commentInput = document.getElementById("commentInput");
const addCommentBtn = document.getElementById("addCommentBtn");

let comments = [];

function renderComments() {
  commentList.innerHTML = "";
  comments.forEach((text) => {
    const div = document.createElement("div");
    div.className = "comment";
    div.textContent = text;
    commentList.appendChild(div);
  });
}

addCommentBtn.addEventListener("click", () => {
  const text = commentInput.value.trim();
  if (text === "") {
    alert("Please write a comment before posting.");
    return;
  }
  comments.push(text);
  commentInput.value = "";
  renderComments();
});

// Save comments in localStorage when leaving page
window.addEventListener("beforeunload", () => {
  localStorage.setItem("comments", JSON.stringify(comments));
});

// Load saved comments
window.addEventListener("load", () => {
  const saved = JSON.parse(localStorage.getItem("comments"));
  if (saved) {
    comments = saved;
    renderComments();
  }
});