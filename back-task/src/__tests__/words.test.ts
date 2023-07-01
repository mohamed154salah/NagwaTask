import request from "supertest"
import app  from "../server"
import { exists } from "../handlers/words"
import { Server, IncomingMessage, ServerResponse } from "http";
const port = 3000; // use a different port


describe("test words endPoint",()=>{

  let server: Server;

  beforeAll(done => {
    server = app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
      done();
    });
  });

  afterAll(done => {
    server.close(done);
  });


  it("should return array have 10 items", async ()=>{
    const response = await request(app)
      .get("/api/words")
    expect(response.body.list.length).toBe(10)
  })

  it("should return array have at least 1 adjective, 1 adverb, 1 noun, and 1 verb", async () => {
    const response = await request(app)
      .get("/api/words")

    expect(exists(response.body.list)).toBeTruthy()

  })

})
