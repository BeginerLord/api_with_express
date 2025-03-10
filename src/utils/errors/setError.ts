class CustomError extends Error {
    status: number;
  
    constructor(status: number, message?: string) {
      super(message);
      this.status = status;
      Object.setPrototypeOf(this, CustomError.prototype) // Restaurar el prototipo correcto para asegurar instanceof
      Error.captureStackTrace(this, this.constructor); // Capturar stack trace
    }
  }
  
  export const setError = (status: number, message: string): CustomError => {
    return new CustomError(status, message)
  }