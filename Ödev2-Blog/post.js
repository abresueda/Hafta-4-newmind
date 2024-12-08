const posts = [
    { title: "Post 1", content: "Content of Post 1"},
    { title: "Post 2", content: "Content of Post 2"},
    { title: "Post 3", content: "Content of Post 3"},
];

//Postları sıralayan fonksiyon
const listPosts = () => {
    console.log("### Mevcut Postlar ###");
    posts.forEach((post, index) => {
        console.log(`${index + 1}. ${post.title} - ${post.content}`);
    });
    console.log("\n");
};

//Yeni bir post ekleyen fonksiyon
const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        if (newPost && newPost.title && newPost.content) {
            posts.push(newPost);
            resolve("Yeni post eklendi!");
        } else {
            reject("Geçersiz post bilgisi!");
        }
    });
};

//Blog işlemleri
async function manageBlog() {
    try {
        console.log("1. Mevcut postları sıralıyoruz...");
        listPosts();

        console.log("2. Yeni bir post ekliyoruz...");
        const newPost = { title: "Post 4", content: "Content of Post 4"};
        const result = await addPost(newPost);
        console.log(result);

        console.log("3. Yeni post ile postları tekrar sıralıyoruz...");
        listPosts();
    } catch (error) {
        console.error("Bir hata oluştu:", error);
    } 
}

//Postları sıralar, yeni postu ekler, postları yeniden sıralar.
manageBlog();