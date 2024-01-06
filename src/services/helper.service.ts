import crypto from 'crypto';
import dayjs from 'dayjs';

export class HelperService {
  private static instance: HelperService;

  public static getInstance(): HelperService {
    if (!HelperService.instance) {
      HelperService.instance = new HelperService();
    }

    return HelperService.instance;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public isEmpty(value: any): boolean {
    return (
      value === undefined ||
      value === null ||
      value === '' ||
      (Object.keys(value).length === 0 && Object.getPrototypeOf(value) === Object.prototype) ||
      (Array.isArray(value) && value.length === 0)
    );
  }

  public removeObjectEmpty(obj: any): object {
    for (const key of Object.keys(obj)) {
      if (this.isEmpty(obj[key])) {
        delete obj[key];
      }
    }

    return obj;
  }

  public getRandomNumber() {
    const buffer = crypto.randomBytes(4);
    const randomInt = buffer.readUInt32BE(0);

    return randomInt / 0xff_ff_ff_ff;
  }

  public reverseString(input: string) {
    return [...input].reverse().join('');
  }

  public formatDate(date: Date): string {
    return dayjs(date).format('DD/MM/YYYY HH:mm:ss');
  }
}
