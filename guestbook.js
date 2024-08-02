function addComment(){
    var comment = document.getElementById("comment").value;
    var commentList = document.getElementById("commentList");
    var newComment = document.createElement("p");
    newComment.innerHTML = comment;
    commentList.innerHTML = "";
    commentList.appendChild(newComment);
    document.getElementById("comment").value = "";
}

function clearComment(){
    var commentList = document.getElementById("commentList");
    commentList.innerHTML = "";
}
