export class UIDService {
  static generate() {
      return `${Date.now().toString(16)}-${Math.floor(Math.random() * 10000).toString(16)}`
    }
}