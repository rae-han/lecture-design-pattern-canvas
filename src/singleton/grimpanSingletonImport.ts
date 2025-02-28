class Grimpan2 {
  private instance: Grimpan;

  constructor(canvas: HTMLCanvasElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 입력하세요");
    }
  }
}

export default new Grimpan2(document.querySelector("canvas"));
