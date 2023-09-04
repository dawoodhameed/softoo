//reusable error class to be used throughout the project

export class ErrorBase extends Error {
  message: string;
  constructor(message: string) {
    super();
    this.message = message;
  }
}
