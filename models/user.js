
export default class User {
  constructor(name) {
    this.name = name;
  }

  greetUser() {
    return `Hello user: ${this.name}`;
  }
};
