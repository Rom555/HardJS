'use strict';

class First {
  static hello() {
    console.log('Привет я метод родителя!');
  }
}

class Second extends First {
  static hello() {
    super.hello();
    console.log('А я наследуемый метод!');
  }
}

Second.hello();
