const footerImgUrl = "./like.png";

function createPost(postData) {
    const article = document.createElement("article");
    const articleDetails = document.createElement("section");
    const userImg = document.createElement("img");
    userImg.height = 28;
    userImg.width = 28;
    userImg.src = postData.post_profile_img;

    const date = document.createElement("span");
    date.innerText = postData.year;

    articleDetails.appendChild(userImg);
    articleDetails.appendChild(date);
    articleDetails.className = "article-details";
    article.appendChild(articleDetails);

    const articleContent = document.createElement("section");
    const articleImg = document.createElement("img");
    //userImg.height = 28;
    //userImg.width = 28;
    articleImg.src = postData.post_img;

    const content = document.createElement("p");
    content.innerText = postData.post_text;

    articleContent.appendChild(articleImg);
    articleContent.appendChild(content);
    articleContent.className = "article-content";
    article.appendChild(articleContent);


    const articleFooter = document.createElement("section");
    const articleFooterImg = document.createElement("img");
    articleFooterImg.height = 64;
    articleFooterImg.width = 64;
    articleFooterImg.src = footerImgUrl;

    articleFooter.appendChild(articleFooterImg);
    articleFooter.className = "article-footer";
    article.appendChild(articleFooter);

    return article;
}

async function loadPosts() {
    //const posts = await fetch("./data.json").then(res => res.json());
    const posts = await fetch("https://raw.githubusercontent.com/capnarchie/capnarchie.github.io/main/data.json").then(res => res.json());
    console.log(posts);

    const postsElement = document.querySelector("#posts");

    for(const post of posts) {
        postsElement.appendChild(createPost(post));
    }

}
loadPosts();