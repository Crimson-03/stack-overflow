import { ITag } from "./interfaces";
import {v4 as uuid} from 'uuid';

export class Tag {
  private id: string;
  private keyword: string;

  constructor(keyword: string) {
    this.id = uuid();
    this.keyword = keyword;
  }

  getTag(): string {
    return this.keyword;
  }

  getId(): string {
    return this.id;
  }
}
