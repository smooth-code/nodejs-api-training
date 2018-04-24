import request from 'supertest'
import app from './app'
import setupDatabase from './setupDatabase'
import knex from './knex'

describe('app', () => {
  beforeEach(async () => {
    setupDatabase()
    await knex('articles').del()
  })

  describe('GET /articles', () => {
    it('should return articles', async () => {
      const [articleId] = await knex('articles').insert({
        title: 'My article',
        content: 'My content',
      })

      const response = await request(app)
        .get('/articles')
        .expect(200)

      expect(response.body).toEqual([
        { content: 'My content', id: articleId, title: 'My article' },
      ])
    })
  })
})
