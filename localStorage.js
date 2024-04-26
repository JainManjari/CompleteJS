/*
   localStorage stores the items in the form of JSON String => 
   "[{\"id\":1,\"text\":\"hello\"},{\"id\":2,\"text\":\"he3lo\"},{\"id\":3,\"text\":\"llo\"}]
   to convert this string to an object we use JSON parse

   localStorage.clear() => to clear localStorage
   localStorage.removeItem("comments") => to remove value of "comments" and key "comments"

*/

let comments=JSON.parse(localStorage.getItem("comments") || "[]");
console.log(comments);

let newComment={
    "id":1,
    "text":"hello"
}

comments.push(newComment);

localStorage.setItem("comments",JSON.stringify(comments));

console.log(localStorage.getItem("comments"));

newComment={
    "id":comments[comments.length-1]["id"]+1,
    "text":"bye"
}

comments.push(newComment);

localStorage.setItem("comments",JSON.stringify(comments));

console.log(localStorage.getItem("comments"));

//localStorage.removeItem("comments");
//localStorage.clear();

console.log(localStorage.getItem("comments"));