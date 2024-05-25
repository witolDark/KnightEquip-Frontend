export class GetInventory {
  static readonly type = "[Inventory] get";

  constructor(public page: number, public size: number) {
  }
}

export class GenerateItem {
  static readonly type = "[Inventory] add";
}
