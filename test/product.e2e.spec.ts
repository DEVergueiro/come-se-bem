import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { PrismaClient } from '@prisma/client';
import * as request from 'supertest';

import { AppModule } from '../src/app-module';

const dataProduct = new PrismaClient().product.create({
  data: {
    name: 'Test',
    image: 'www.test.com/test.jpg',
    value: 10,
  },
});

describe('ProductController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/products (GET)', () => {
    return request(app.getHttpServer())
      .get('/products')
      .expect(200)
      .expect(dataProduct);
  });
});
