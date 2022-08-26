import { execSync } from 'child_process';
import { ClientRequest } from 'http';
import NodeEnvironment from 'jest-environment-node/build';
import { resolve } from 'path';
import { v4 as uuid } from 'uuid';

const prismaCli = './node_modules/.bin/prisma';

// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config({
  path: resolve(__dirname, '..', '.env.test'),
});

class CustomEnvironment extends NodeEnvironment {
  constructor(config) {
    super(config);
    this.schema = `code_schema_${uuid()}`;
    this.connectionString = `${process.env.DATABASE_TEST_URL}${this.schema}`;
  }

  setup() {
    process.env.DATABASE_TEST_URL = this.connectionString;
    this.global.process.env.DATABASE_TEST_URL = this.connectionString;

    execSync(`${prismaCli} migrate dev`);
  }

  async teardown() {
    const client = new ClientRequest({
      connectionString: this.connectionString,
    });

    await client.connect();
    await client.query(`DROP SCHEMA IF EXISTS "${this.schema}" CASCADE`);
    await client.end();
  }
}

export default CustomEnvironment;
