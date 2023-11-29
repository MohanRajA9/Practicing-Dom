let likeButton = document.getElementById("likeButton");  // accessing the element that created in the HTML
let likesCount = document.getElementById("likesCount");
let disLikeButton = document.getElementById("disLikeButton");

likeButton.addEventListener("click", // to listen the events(click) going to made in the button
function increaseCount() { // the function that executed when the click is done
    let likes = +likesCount.innerText;
    likesCount.innerText = "" + (likes+1);
});

disLikeButton.addEventListener("click", function decreaseCount() {
    let likes = +likesCount.innerText;
    likesCount.innerText = "" + (likes-1);
});
