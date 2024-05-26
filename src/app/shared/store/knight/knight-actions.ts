export class GetKnight {
  static readonly type = '[knight] get';
}

export class EquipItem {
  static readonly type = '[knight] equip';

  constructor(public itemId: number) {
  }
}
