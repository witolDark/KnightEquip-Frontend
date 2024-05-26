export class GetWeapons {
  static readonly type = "[Inventory] get weapons";

  constructor(public page: number, public size: number) {
  }
}

export class GetHelmets {
  static readonly type = "[Inventory] get helmets";

  constructor(public page: number, public size: number) {
  }
}

export class GetCloaks {
  static readonly type = "[Inventory] get cloaks";

  constructor(public page: number, public size: number) {
  }
}

export class GetChestplates {
  static readonly type = "[Inventory] get chestplates";

  constructor(public page: number, public size: number) {
  }
}

export class GetBoots {
  static readonly type = "[Inventory] get boots";

  constructor(public page: number, public size: number) {
  }
}

export class GenerateItem {
  static readonly type = "[Inventory] add";
}
