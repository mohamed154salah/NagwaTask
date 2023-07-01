import request from "supertest"
import app  from "../server"
import { Server, IncomingMessage, ServerResponse } from "http";
const port = 8001; // use a different port

describe('rank endpoint', () => {
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

  it('should return 80 if request send score 90', async () => {
    const response = await request(app).post('/api/rank').send({ score: 90 });
    expect(response.status).toBe(200);
    expect(response.body).toBe(80);
  });

  it('should return 40 if request send score 50', async () => {
    const response = await request(app).post('/api/rank').send({ score: 50 });
    expect(response.status).toBe(200);
    expect(response.body).toBe(40);
  });

  it('should return 56.67 if request send score 60', async () => {
    const response = await request(app).post('/api/rank').send({ score: 60 });
    expect(response.status).toBe(200);
    expect(response.body).toBeCloseTo(56.67);
  });
});
