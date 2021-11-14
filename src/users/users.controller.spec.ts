import { Test, TestingModule } from '@nestjs/testing';
import { UsersController } from './users.controller';

describe('UsersController', () => {
  let controller: UsersController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
    }).compile();

    controller = module.get(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should create a user', () => {
    controller.createUser
    expect(controller).toBeDefined();
  });
});
