import {
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
  INestApplication,
} from '@nestjs/common';
import { Logger } from '@nestjs/common/services/logger.service';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaProvider
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  // eslint-disable-next-line prettier/prettier
  private readonly logger = new Logger(PrismaProvider.name);

  onModuleInit() {
    this.logger.log('Connecting to Prisma database...');
    return this.$connect();
  }

  async enableShutdownHooks(app: INestApplication) {
    this.$on('beforeExit', async () => {
      await app.close();
    });
  }

  onModuleDestroy() {
    return this.$disconnect();
  }
}
