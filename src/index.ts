// import g1 from "./singleton/grimpanSingletonImport.js";
// import g2 from "./singleton/grimpanSingletonImport.js";
// import g3 from "./singleton/g3.js";
// import g4 from "./singleton/g4.js";
// import g5 from "./singleton/g5.js";
// import g6 from "./singleton/g6.js";
import Singleton from "./singleton/index.js";
import Grimpan from "./singleton/grimpan.js";
import SingletonImport1 from "./singleton/singletonImport1.js";
import SingletonImport2 from "./singleton/singletonImport2.js";
import AbstractGrimpanFactory, {
  ChromeGrimpanFactory,
} from "./factory/AbstractGrimpanFactory.js";
import { ChromeGrimpanHistory } from "./abstract-factory/AbstractGrimpanHistory.js";

function main() {
  // Grimpan.getInstance().initialize();

  /**
   * # 싱글톤 패턴
   * - 자바스크립트에서는 import 문법을 사용하여 모듈을 불러오면 싱글톤 패턴이 적용된다.
   */
  // console.log("g1 === g2: ", g1 === g2);

  /**
   * 각각 다른 파일에서 불러와도 적용 된다.
   */
  // console.log("g3 === g4: ", g3 === g4);
  console.log(SingletonImport1 === SingletonImport2);

  /**
   * 각각 다른 파일에서 불러와도 적용 된다.
   * 다만 생성하는 파일(new 연산자)이 다르면 적용되지 않는다.
   */
  // console.log("g5 === g6: ", g5 === g6);

  /**
   * 제네릭 클래스를 사용하여 타입을 제한할 수 있다.
   */
  // const g7 = Singleton.getInstance(document.querySelector("canvas"));
  // const g8 = Singleton.getInstance(document.querySelector("canvas"));
  // console.log("g7 === g8: ", g7 === g8);

  Grimpan.getInstance().initialize();

  const factory = ChromeGrimpanFactory;

  const grimpan = factory.createGrimpan();
  const grimpanMenu = factory.createGrimpanMenu(grimpan);
  const grimpanHistory = factory.createGrimpanHistory(grimpan);

  grimpan.initialize();
  grimpanMenu.initialize();
  grimpanHistory.initialize();

  console.log({ grimpan, grimpanMenu, grimpanHistory });
}

main();
