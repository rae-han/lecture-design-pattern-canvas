interface Button {
  name: string;
  type: string;
  onClick: () => void;
  active: boolean;
}

interface Input {
  name: string;
  type: string;
  onChange: () => void;
  value: string | number;
}

class GrimpanMenuBtn {
  name?: string;
  type?: string;
  onClick?: () => void;
  onChange?: () => void;
  active?: boolean;
  value?: string | number;

  constructor(
    // 빌더가 아니면 만질수 없게 private을 붙였다.
    name?: string,
    type?: string,
    onClick?: () => void,
    onChange?: () => void,
    active?: boolean,
    value?: string | number
  ) {
    this.name = name;
    this.type = type;
    this.onClick = onClick;
    this.onChange = onChange;
    this.active = active;
    this.value = value;
  }
}

interface GrimpanMenuBtnBuilder {
  setName(name: string): this;
  setType(type: string): this;
  setActive(active: boolean): this;
  setValue(value: string | number): this;
  setOnClick(onClick: () => void): this;
  setOnChange(onChange: () => void): this;
  build(): GrimpanMenuBtn;
}

class ChromeGrimpanMenuBtnBuilder implements GrimpanMenuBtnBuilder {
  btn: GrimpanMenuBtn;

  constructor() {
    // name과 type은 반드시 있어야 해서 그냥 세터로 안하고 생성자로 옮겼다.
    this.btn = new GrimpanMenuBtn();
  }

  setName(name: string) {
    this.btn.name = name;
    return this;
  }

  setType(type: string) {
    this.btn.type = type;
    return this;
  }

  setActive(active: boolean) {
    this.btn.active = active;
    return this;
  }

  setValue(value: string | number) {
    this.btn.value = value;
    return this;
  }

  setOnClick(onClick: () => void) {
    this.btn.onClick = onClick;
    return this;
  }

  setOnChange(onChange: () => void) {
    this.btn.onChange = onChange;
    return this;
  }

  build() {
    return this.btn;
  }
}

class IEGrimpanMenuBtnBuilder implements GrimpanMenuBtnBuilder {
  btn: GrimpanMenuBtn;

  constructor(name: string, type: string) {
    // name과 type은 반드시 있어야 해서 그냥 세터로 안하고 생성자로 옮겼다.
    this.btn = new GrimpanMenuBtn(name, type);
  }

  setName(name: string) {
    this.btn.name = name;
    return this;
  }

  setType(type: string) {
    this.btn.type = type;
    return this;
  }

  setActive(active: boolean) {
    this.btn.active = active;
    return this;
  }

  setValue(value: string | number) {
    this.btn.value = value;
    return this;
  }

  setOnClick(onClick: () => void) {
    this.btn.onClick = onClick;
    return this;
  }

  setOnChange(onChange: () => void) {
    this.btn.onChange = onChange;
    return this;
  }

  build() {
    return this.btn;
  }
}

class GrimpanMenuBtnDirector {
  static createBackBtn(builder: GrimpanMenuBtnBuilder) {
    const backBtnBuilder = builder
      .setName("뒤로가기")
      .setType("button")
      .setActive(false)
      .setOnClick(() => {})
      .build();
  }
  static createForwardBtn(builder: GrimpanMenuBtnBuilder) {
    const backBtnBuilder = builder
      .setName("앞으로가기")
      .setType("button")
      .setActive(false)
      .setOnClick(() => {})
      .build();
  }
}

// GrimpanMenuBtnDirector.createBackBtn(
//   new ChromeGrimpanMenuBtnBuilder("뒤로가기", "button")
// );

GrimpanMenuBtnDirector.createBackBtn(new ChromeGrimpanMenuBtnBuilder());
GrimpanMenuBtnDirector.createForwardBtn(new ChromeGrimpanMenuBtnBuilder());

// const backBtnBuilder = new GrimpanMenuBtn.Builder(
//   "뒤로가기",
//   "button"
// ).setActive(true);

// // 오래 걸리는 작업

// const backBtn = backBtnBuilder.setValue("안녕").build();
