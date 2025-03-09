export abstract class Grimpan {
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }

  abstract initialize(): void;

  static getInstance() {}
}

export class ChromeGrimpan extends Grimpan {
  private static instance: ChromeGrimpan;

  override initialize() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new ChromeGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export class IEGrimpan extends Grimpan {
  private static instance: IEGrimpan;

  override initialize() {}

  static override getInstance() {
    if (!this.instance) {
      this.instance = new IEGrimpan(document.querySelector("canvas"));
    }
    return this.instance;
  }
}

export default Grimpan;
