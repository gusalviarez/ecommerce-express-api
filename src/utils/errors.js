export class ErrorResponse extends Error {
  constructor(message) {
    super(message);
    this.name = "ErrorResponse";
  }
}
