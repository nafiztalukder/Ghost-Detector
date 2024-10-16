const request = require('supertest');
const app = require('../app'); // Import the Express app

describe('Ghost-Detector API', () => {
    // Test for /ghost-info endpoint
    describe('GET /ghost-info', () => {
        it('should return ghost info when ghost_type is provided', async () => {
            const response = await request(app).get('/ghost-info').query({ ghost_type: 'Poltergeist' });
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('ghost_type', 'Poltergeist');
            expect(response.body).toHaveProperty('favorite_food');
            expect(response.body).toHaveProperty('favorite_time_of_night');
        });

        it('should return 400 error when ghost_type is missing', async () => {
            const response = await request(app).get('/ghost-info');
            expect(response.statusCode).toBe(400);
            expect(response.body).toHaveProperty('error', 'Ghost type required');
        });
    });

    // Test for /users endpoint
    describe('GET /users', () => {
        it('should return the list of users', async () => {
            const response = await request(app).get('/users');
            expect(response.statusCode).toBe(200);
            expect(response.body).toHaveProperty('users');
            expect(response.body.users.length).toBeGreaterThan(0);
            expect(response.body.users[0]).toHaveProperty('username');
            expect(response.body.users[0]).toHaveProperty('sightings_count');
        });
    });
});
