import Race from './Race';

export default class Dwarf extends Race {
  private _maxLifePoints: number;
  static _instancesNum = 0;

  constructor(name: string, dexterity: number) {
    super(name, dexterity);
    this._maxLifePoints = 80;
    Dwarf.addInstancesNum();
  }

  static addInstancesNum(): void {
    this._instancesNum += 1;
  }

  public static createdRacesInstances(): number {
    return this._instancesNum;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}