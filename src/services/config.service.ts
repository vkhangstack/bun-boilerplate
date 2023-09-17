import { readFileSync } from 'fs';
import { join } from 'path';

export class AppConfigService {
  private static instance: AppConfigService;

  public static getInstance(): AppConfigService {
    if (!AppConfigService.instance) {
      AppConfigService.instance = new AppConfigService();
    }

    return AppConfigService.instance;
  }

  private getNumber(key: string): number {
    const value = this.get(key);

    try {
      return Number(value);
    } catch {
      throw new Error(key + ' environment variable is not a number');
    }
  }

  private getBoolean(key: string): boolean {
    const value = this.get(key);

    try {
      return Boolean(JSON.parse(value));
    } catch {
      throw new Error(key + ' env var is not a boolean');
    }
  }

  private getString(key: string): string {
    const value = this.get(key);

    return value.replace(/\\n/g, '\n');
  }

  private get(key: string): string {
    // const value = this.configService.get<string>(key);

    // if (isNil(value)) {
    //   throw new Error(key + ' environment variable does not set'); // probably we should call process.exit() too to avoid locking the service
    // }

    return key;
  }

  get nodeEnv(): string {
    return this.getString('NODE_ENV');
  }

  get isDevelopment(): boolean {
    return this.nodeEnv === 'development';
  }

  get isProduction(): boolean {
    return this.nodeEnv === 'production';
  }

  get isTest(): boolean {
    return this.nodeEnv === 'test';
  }

  get version(): string {
    return this.getString('VERSION') ?? '0.0.1';
  }

 

  get mongoConfig() {
    return {
      uri: this.getString('MONGO_URI') ?? 'localhost',
      dbName: this.getString('MONGO_DB') ?? 'password_fortress',
      user: this.getString('MONGO_USER') ?? 'fortress',
      pass: this.getString('MONGO_PASSWORD') ?? 'fortress',
      journal: true,
      retryAttempts: 5,
    };
  }

  get redisConfig() {
    return {
      host: this.getString('REDIS_HOST') ?? 'localhost',
      port: this.getNumber('REDIS_PORT') ?? 6379,
      username: this.getString('REDIS_USERNAME') ?? 'root',
      password: this.getString('REDIS_PASSWORD') ?? 'fortress',
      dbBull: 2,
    };
  }

  get documentationEnabled(): boolean {
    return this.getBoolean('DOCUMENTATION_ENABLE') ?? false;
  }

  get authConfig() {
    return {
      jwtExpirationTime: this.getNumber('JWT_EXPIRES') ?? 24_600,
      jwtPublicKey: readFileSync(join(__dirname, './../../', 'config/token/public.pem'), 'utf8').toString(),
      jwtPrivateKey: readFileSync(join(__dirname, './../../', 'config/token/private.pem'), 'utf8').toString(),
      jwtIssuer: this.getString('JWT_ISSUER') ?? 'fortress',
    };
  }

  get cryptConfig() {
    return {
      publicKey: readFileSync(join(__dirname, './../../', 'config/default/public.pem'), 'utf8').toString(),
      privateKey: readFileSync(join(__dirname, './../../', 'config/default/private.pem'), 'utf8').toString(),
    };
  }

  get passwordCryptConfig() {
    return {
      publicKey: readFileSync(join(__dirname, './../../', 'config/password/public.pem'), 'utf8').toString(),
      privateKey: readFileSync(join(__dirname, './../../', 'config/password/private.pem'), 'utf8').toString(),
    };
  }

  get cryptClassOneConfig() {
    return {
      publicKey: readFileSync(join(__dirname, './../../', 'config/layerKey/class1/public.pem'), 'utf8').toString(),
      privateKey: readFileSync(join(__dirname, './../../', 'config/layerKey/class1/private.pem'), 'utf8').toString(),
    };
  }

  get cryptClassTwoConfig() {
    return {
      publicKey: readFileSync(join(__dirname, './../../', 'config/layerKey/class2/public.pem'), 'utf8').toString(),
      privateKey: readFileSync(join(__dirname, './../../', 'config/layerKey/class2/private.pem'), 'utf8').toString(),
    };
  }

  get cryptClassThreeConfig() {
    return {
      publicKey: readFileSync(join(__dirname, './../../', 'config/layerKey/class3/public.pem'), 'utf8').toString(),
      privateKey: readFileSync(join(__dirname, './../../', 'config/layerKey/class3/private.pem'), 'utf8').toString(),
    };
  }

  get appConfig() {
    return {
      port: this.getNumber('PORT') ?? 4000,
      host: this.getString('HOST') ?? '0.0.0.0',
      version: this.getString('VERSION') ?? '0.0.1',
      internalKey: this.getString('INTERNAL_KEY'),
    };
  }

  get httpRequestConfig() {
    return {
      timeout: 15_000,
      maxRedirects: 5,
    };
  }

  get rabbitMQConfig() {
    return {
      host: this.getString('RABBIT_HOST') ?? 'localhost',
      port: this.getNumber('RABBIT_PORT') ?? 10_125,
      username: this.getString('RABBIT_USERNAME') ?? 'fortress',
      password: this.getString('RABBIT_PASSWORD') ?? 'fortress',
      virtualHost: this.getString('RABBIT_VIRTUAL_HOST') ?? 'fortress',
    };
  }

  get globalPrefix() {
    return {
      api: this.getString('PREFIX') ?? '/api',
    };
  }

  get rateLimit() {
    return {
      minutes: this.getNumber('RATE_LIMIT_MINUTES') ?? 60_000,
      max: this.getNumber('RATE_LIMIT_MAX') ?? 100,
    };
  }

  get mailConfig() {
    return {
      host: this.getString('MAIL_HOST'),
      port: this.getNumber('MAIL_PORT'),
      secure: this.getBoolean('MAIL_SECURE'),
      username: this.getString('MAIL_USER'),
      password: this.getString('MAIL_PASSWORD'),
      fromDefault: this.getString('MAIL_FROM_DEFAULT'),
    };
  }
}
