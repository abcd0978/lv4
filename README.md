api

getPostings:GET  
url: /posts?_limit=5&_page=&lt;page&gt;  
req: none  
res: post객체배열  

getPosting:GET  
url: /posts?id=&lt;id&gt;  
req: none  
res: 하나의 post객체  

modifyPosting:PATCH  
url: /posts/&lt;id&gt;  
req: {postId,post객체}  
res: 바뀐객체  

deletePosting:DELETE  
url: /posts/&lt;id&gt;  
req: postId  
res: 삭제한 post객체  

post:POST  
url: /posts  
req: post객체  
res: 작성된post객체  

getComments:GET  
url: /comments?postId=&lt;postId&gt;  
req: postId  
req: comment객체배열  

comment:POST  
url: /comments
req: comment객체  
res: 작성된 comment객체  
