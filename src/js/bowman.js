import Character from '../Character';

export default class Bowman extends Character {
  constructor(name) {
    super(name);
    this.type = 'Bowman';
    this.attack = 25;
    this.defense = 25;
  }
}
