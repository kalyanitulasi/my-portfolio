
let posts = [
"SEO Tips",
"Website Design Guide",
"WordPress Development",
"Google Ranking Factors",
"Digital Marketing Trends"
];

let list = document.getElementById("postList");

posts.forEach(function(post){
let li = document.createElement("li");
li.textContent = post;
list.appendChild(li);
});

