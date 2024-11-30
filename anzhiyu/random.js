var posts=["2024/11/24/2024-11-24-各编程语言的运算符优先级/","2024/11/24/数据结构-散列表(hash-table)/","2024/11/19/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };