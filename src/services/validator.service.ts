
export class ValidatorService {
  private static instance: ValidatorService;

  public static getInstance(): ValidatorService {
    if (!ValidatorService.instance) {
      ValidatorService.instance = new ValidatorService();
    }

    return ValidatorService.instance;
  }

  public isImage(mimeType: string): boolean {
    const imageMimeTypes = ['image/jpeg', 'image/png'];

    return imageMimeTypes.includes(mimeType);
  }
}
