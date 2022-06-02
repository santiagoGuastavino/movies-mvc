const supertest = require('supertest')
const { app, server } = require('../app')
const api = supertest(app)

test('movies are returned as json', async () => {
  await api
    .get('/api/movies')
    .expect(200)
    .expect('Content-type', /application\/json/)
})

test('there are 21 movies per response', async () => {
  const response = await api.get('/api/movies')
  expect(response.body).toHaveLength(21)
})

afterAll(() => {
  server.close()
})
