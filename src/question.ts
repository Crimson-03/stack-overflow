import { Answer } from "./answer";
import { Comment } from "./comment";
import { Commentable } from "./commentable";
import { Tag } from "./tag";
import { User } from "./user";
import { v4 as uuid } from "uuid";

export class Question implements Commentable{
  private id: string;
  private author: User;
  private topic: string;
  private content: string;
  private tags: Tag[];
  private answers: Answer[];
  private comments: Comment[];

  constructor(user: User, topic: string, content: string, tags: Tag[]) {
    this.id = uuid();
    this.author = user;
    this.topic = topic;
    this.content = content;
    this.tags = tags;
    this.answers = [];
    this.comments = [];
  }

  attachAnswer(answer: Answer) {
    this.answers.push(answer);
  }

  getAuthor(): User {
    return this.author;
  }

  addComment(comment: Comment) {
    this.comments.push(comment);
  }

  getComment(): Comment[] {
    return this.comments;
  }  

  getId() : string {
    return this.id;
  }

  getTitle() : string {
    return this.topic;
  }

  getContent() : string {
    return this.content;
  }

  getAnswer() : Answer[] {
    return this.answers;
  }

  getTags() : Tag[] {
    return this.tags;
  }
}
