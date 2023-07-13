api

getPostings:GET
req: none
res: post객체배열

getPosting:GET
req: none
res: 하나의 post객체

modifyPosting:PATCH
req: {postId,post객체}
res: 바뀐객체

deletePosting:DELETE
req: postId
res: 삭제한 post객체

post:POST
req: post객체
res: 작성된post객체

getComments:GET
req: postId
req: comment객체배열

comment:POST
req: comment객체
res: 작성된 comment객체
