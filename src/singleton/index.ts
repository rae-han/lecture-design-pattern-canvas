class Singleton<T> {
  private static instance: Singleton<any>;
  protected data: T;

  protected constructor(data: T) {
    this.data = data;
  }

  public static getInstance<T>(data: T): Singleton<T> {
    if (!this.instance) {
      this.instance = new this(data);
    }
    return this.instance;
  }

  public getData(): T {
    return this.data;
  }
}

export default Singleton;
