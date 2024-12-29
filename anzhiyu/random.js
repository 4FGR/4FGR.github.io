var posts=["2024/11/24/2024-11-24-各编程语言的运算符优先级/","2024/11/19/hello-world/","2024/12/01/数据结构-散列表(hash-table)/","2024/12/08/第三十六次CCF认证(CSP)第二道题个人题解/","2024/12/29/test/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };