class Grimpan {
  private static instance: Grimpan;

  private constructor(canvas: HTMLCanvasElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }

  initialize() {
    console.log("initialize");
  }

  private static createInstance() {
    new Grimpan(document.querySelector("canvas"));
  }

  private static hasInstance() {
    return this.instance !== null;
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default Grimpan;
