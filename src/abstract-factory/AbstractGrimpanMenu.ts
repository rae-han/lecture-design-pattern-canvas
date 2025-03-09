import { GrimpanMenuBtn } from "../builder/GrimpanMenuBtn.js";
import Grimpan, { ChromeGrimpan, IEGrimpan } from "../factory/AbstractGrimpan.js";

export abstract class GrimpanMenu {
  grimpan: Grimpan;
  dom: HTMLElement;
  
  protected constructor(grimpan: Grimpan, dom: HTMLElement) {
    this.grimpan = grimpan;
    this.dom = dom;
  }

  abstract initialize(types: BtnType[]): void;

  static getInstance(grimpan: Grimpan, dom: HTMLElement) {}
}

export class IEGrimpanMenu extends GrimpanMenu {
  private static instance: IEGrimpanMenu;
  override initialize(types: BtnType[]): void {}
  static override getInstance(grimpan: IEGrimpan, dom: HTMLElement): IEGrimpanMenu {
    if (!this.instance) {
      this.instance = new IEGrimpanMenu(grimpan, dom);
    }
    return this.instance;
  }
}

type BtnType = 'pen' | 'circle' | 'rectangle' | 'eraser' | 'back' | 'forward' | 'save' | 'pipette' | 'color';
export class ChromeGrimpanMenu extends GrimpanMenu {
  private static instance: ChromeGrimpanMenu;
  override initialize(types: BtnType[]): void {
    types.forEach(this.drawButtonByType.bind(this));
  }

  drawButtonByType(type: BtnType) {
    switch (type) {
      case 'back': {
        const btn = new GrimpanMenuBtn.Builder(this, '뒤로', 'button').build();
        btn.draw();
        return btn;
      }
      case 'forward': {
        const btn = new GrimpanMenuBtn.Builder(this, '앞으로', 'button').build();
        btn.draw();
        return btn;
      }
      case 'color': {
        const btn = new GrimpanMenuBtn.Builder(this, '컬러', 'input').build();
        btn.draw();
        return btn;
      }
      case 'pipette': {
        const btn = new GrimpanMenuBtn.Builder(this, '스포이드', 'button').build();
        btn.draw();
        return btn;
      }
      case 'eraser': {
        const btn = new GrimpanMenuBtn.Builder(this, '지우개', 'button').build();
        btn.draw();
        return btn;
      }
      case 'pen': {
        const btn = new GrimpanMenuBtn.Builder(this, '펜', 'button').build();
        btn.draw();
        return btn;
      }
      case 'circle': {
        const btn = new GrimpanMenuBtn.Builder(this, '원', 'button').build();
        btn.draw();
        return btn;
      }
      case 'rectangle': {
        const btn = new GrimpanMenuBtn.Builder(this, '사각형', 'button').build();
        btn.draw();
        return btn;
      }
      case 'save': {
        const btn = new GrimpanMenuBtn.Builder(this, '저장', 'button').build();
        btn.draw();
        return btn;
      }
      default:
        throw new Error(`알 수 없는 타입 ${type}`);
    }
  }
  static override getInstance(grimpan: ChromeGrimpan, dom: HTMLElement): ChromeGrimpanMenu {
    if (!this.instance) {
      this.instance = new ChromeGrimpanMenu(grimpan, dom)
    }
    return this.instance;
  }
}
