class App {
  private static instance: App;

  private constructor(os: "windows" | "mac") {
    if (!os || (os !== "windows" && os !== "mac")) {
      throw new Error("os 인자를 입력하세요");
    }
  }

  static getInstance(os: "windows" | "mac") {
    if (!this.instance) {
      this.instance = new App(os);
    }
    return this.instance;
  }
}

export default App;

class AppFactory {
  static createApp(os: "windows" | "mac") {
    if (os === "windows") {
      return App.getInstance("windows");
    } else if (os === "mac") {
      return App.getInstance("mac");
    }

    return new Error("일치하는 os가 없습니다.");
  }
}

const main = () => {
  const windowsApp = AppFactory.createApp("windows");
  const macApp = AppFactory.createApp("mac");
  console.log(windowsApp === macApp);
};

class GrimpanFactory {
  static createGrimpan(type: string) {
    if (type === "ie") {
      // return new IEGrimpan();
    } else if (type === "chrome") {
      // return new ChromeGrimpan();
    } else if (type === "safari") {
      // return new SafariGrimpan();
    }

    return new Error("일치하는 브라우저가 없습니다.");
  }
}

main();
