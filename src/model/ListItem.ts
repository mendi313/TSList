export interface Item {
  id: string;
  item: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = '',
    private _item: string = '',
    private _checked: boolean = false
  ) {}

  get id(): string {
    return this._id;
  }
  get item(): string {
    return this._item;
  }
  get checked(): boolean {
    return this._checked;
  }

  set id(v: string) {
    this.id = v;
  }
  set item(v: string) {
    this.item = v;
  }
  set checked(v: boolean) {
    this._checked = v;
  }
}
