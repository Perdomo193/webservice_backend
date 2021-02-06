const request = require('supertest')
const app = require('../server')

describe('login Endpoints', () => {
    it('login user', async() => {
        const res = await request(app)
            .post('/api/shape/all')
            .send({
                c_1: 1,
                c_2: 2,
		c_3: 3

            })
        expect(res.statusCode).toEqual(200)
        expect(res.body).toHaveProperty('name');
        expect(res.body).toHaveProperty('path');
    })
}
