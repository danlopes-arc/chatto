import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', async () => {
    await request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});

describe('User', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('can register a user with username and password', async () => {
    const user = { username: 'joe', password: 'P4$$w0rd' };

    await request(app.getHttpServer())
      .post('/users')
      .send({ username: 'joe', password: 'P4$$w0rd' })
      .expect(201);

    const {
      body: { token },
    } = await request(app.getHttpServer()).post('/auth').send(user).expect(200);

    expect(token).toBeInstanceOf(String);

    await request(app.getHttpServer())
      .get('/user')
      .auth(token as string, { type: 'bearer' })
      .expect(200)
      .expect({ username: user.username });
  });
});
