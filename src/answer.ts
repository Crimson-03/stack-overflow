import { Question } from "./question";
import { v4 as uuid } from "uuid";
import { User } from "./user";
import { Comment } from "./comment";
import { Commentable } from "./commentable";

export class Answer implements Commentable {
  private id: string;
  private author: User;
  private content: string;
  private question: Question;
  private comments: Comment[];

  constructor(content: string, question: Question, user: User) {
    this.id = uuid();
    this.content = content;
    this.question = question;
    this.author = user;
    this.comments = [];
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }

  getComment(): Comment[] {
    return this.comments;
  }

  getId(): string {
    return this.id;
  }

  getAuthor(): User {
    return this.author;
  }

  getAnswer(): string {
    return this.content;
  }

  getComments(): Comment[] {
    return this.comments;
  }

  getQuestion(): Question {
    return this.question;
  }
}
