export class GetKnight {
  static readonly type = '[knight] get';
}

export class EquipItem {
  static readonly type = '[knight] equip';

  constructor(public itemId: number) {
  }
}

export class UnequipItem {
  static readonly type = '[knight] unequip';

  constructor(public itemId: number) {
  }
}
