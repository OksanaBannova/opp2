import Character from './js/Character';

export default class Zombie extends Character {
  constructor(name) {
    super(name);
    this.type = 'Zombie';
    this.attack = 40;
    this.defense = 10;
  }
}
