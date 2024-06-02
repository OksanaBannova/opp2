import Character from './js/Character';

export default class Undead extends Character {
  constructor(name) {
    super(name);
    this.type = 'Undead';
    this.attack = 25;
    this.defense = 25;
  }
}
