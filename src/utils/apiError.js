class apiError {
  constructor(statusCode, message = "") {
    this.statusCode = statusCode;
    this.message = message;
    this.success = false;
  }
}
export default apiError;