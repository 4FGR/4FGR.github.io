var posts=["2024/11/19/hello-world/","2024/11/24/2024-11-24-各编程语言的符号优先级图标/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };