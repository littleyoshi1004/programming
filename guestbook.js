function addComment(){
    var comment = document.getElementById("comment").ariaValueMax;
    var commentList = document.getElementById("commentList");
    var newComment = document.getElementById("p");
    newComment.innerHTML = comment;
    commentList.innerHTML = "";
    commentList.appendChild(newComment);
    document.getElementById("comment").value = "";
}

function clearComment(){
    var commentList = document.getElementById("commentLsit");
    commentList.innerHTML = "";
}
