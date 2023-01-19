import { EnergyType } from '../Energy';
import Archetype from './Archetype';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _instancesNum = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior.addInstancesNum();
  }

  static addInstancesNum() {
    this._instancesNum += 1;
  }

  public static createdArchetypeInstances() {
    return this._instancesNum;
  }

  public get energyType(): EnergyType {
    return this._energyType;
  }
}