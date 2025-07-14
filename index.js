const http = require("http");
const fs = require("fs"); // file system 모듈(html파일 읽기위함)
const path = require("path"); // 경로처리를 위한 모듈

// 서버 생성 및 요청 처리
const server = http.createServer((req, res) => {
  // logic..
  // req : request로 프론트엔드로 받은 데이터
  // res : responsefh 프론트엔드에게 전달하는 응답값
  // 프론트로부터 받을 데이터는 없으므로 res만 우선 작성
  // res.statusCode = 200; // 200이라는 상태코드를 응답하겠다. 200대는 정상 상태, 400대&500대는 에러 상태
  // res.setHeader("Content-type", "text/plain"); // 응답 헤더
  // res.end("KGA"); // 클라이언트에게 응답할 데이터

  // 1. GET 2. POST 3. PUT 4. DELETE
  if (req.method === "GET") {
    // 조건식 True인 경우 실행
    if (req.url === "/") {
      // index.html 응답
      fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error");
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(data); //  html파일 반환
        }
      }); // __dirname : 햔제 경로 불러옴
    } else if (req.url === "/about") {
      // about.html 응답
      fs.readFile(path.join(__dirname, "about.html"), "utf-8", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error");
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(data);
        }
      });
    } else {
      // contact.html 응답
      fs.readFile(path.join(__dirname, "index.html"), "utf-8", (err, data) => {
        if (err) {
          res.statusCode = 500;
          res.end("Error");
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          res.end(data);
        }
      });
    }
  }
});

// http://localhost:8080/
server.listen(8080, () => {
  console.log("Server on");
  console.log("🚀__dirname:", __dirname);
});

// 정적 파일 서빙 : 3개의 html파일 생성
// index.html. about.html, contact.html
