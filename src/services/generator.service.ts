import type { BinaryToTextEncoding } from 'crypto';
import { createHash, createHmac } from 'crypto';
import { v4 as uuid } from 'uuid';

export type Algorithm = 'sha1' | 'sha256' | 'sha384' | 'sha512';
export type ResponseType = BinaryToTextEncoding;
export type OutputLength = 32 | 64 | 128 | 144;
export interface IHashOptions {
  outputLength: OutputLength;
}

export class GeneratorService {
  private static instance: GeneratorService;

  public static getInstance(): GeneratorService {
    if (!GeneratorService.instance) {
      GeneratorService.instance = new GeneratorService();
    }

    return GeneratorService.instance;
  }


  public uuid(): string {
    return uuid();
  }

  public fileName(ext: string): string {
    return this.uuid() + '.' + ext;
  }

  public randomBase64(): string {
    return this.hash(uuid(), 'sha512', 'base64url', { outputLength: 64 });
  }

  public generateKey(): string {
    return this.hash(uuid(), 'sha256', 'hex', { outputLength: 32 }).slice(0, 32);
  }

  /**
   * @author Pham Van Khang <khang.pv@intelin.vn>
   * @param value string
   * @param alg 'sha1' | 'sha256' | 'sha384' | 'sha512'
   * @param responseType 'base64' | 'base64url' | 'hex' | 'binary'
   * @param options  {{object outputLength: number}}
   */
  public hash(value: string, alg?: Algorithm, responseType?: ResponseType, options?: IHashOptions): string {
    return createHash(alg ?? 'sha256', options)
      .update(value)
      .digest(responseType ?? 'hex');
  }

  /**
   * @author Pham Van Khang <khang.pv@intelin.vn>
   * @param value string
   * @param alg 'sha1' | 'sha256' | 'sha384' | 'sha512'
   * @param responseType 'base64' | 'base64url' | 'hex' | 'binary'
   */
  public createHMAC(value: string, alg?: Algorithm, responseType?: ResponseType): string {
    return createHmac(alg ?? 'sha256', value).digest(responseType ?? 'base64');
  }
}
