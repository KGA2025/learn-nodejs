const http = require("http");

// 서버 생성 및 요청 처리
const server = http.createServer((req, res) => {
    // logic..
    // req : request로 프론트엔드로 받은 데이터
    // res : responsefh 프론트엔드에게 전달하는 응답값
    // 프론트로부터 받을 데이터는 없으므로 res만 우선 작성
    res.statusCode = 200; // 200이라는 상태코드를 응답하겠다. 200대는 정상 상태, 400대&500대는 에러 상태
    res.setHeader("Content-type", "text/plain"); // 응답 헤더
    res.end("KGA"); // 클라이언트에게 응답할 데이터
});

// http://localhost:8080/
server.listen(8080, () => {
    console.log("Server on");
});