import { Answer } from "./answer";
import { Comment } from "./comment";
import { Question } from "./question";
import { v4 as uuid } from "uuid";


export class User {
  private id: string;
  private name: string;
  private email: string;
  private questions: Question[];
  private answers: Answer[];
  private comments: Comment[];

  constructor(name: string, email: string) {
    this.id = uuid();
    this.name = name;
    this.email = email;
    this.answers = [];
    this.questions = [];
    this.comments = [];
  }

  postQuestion(question: Question): boolean {
    this.questions.push(question);
    return true;
  }

  postAnswer(answer: Answer) {
    this.answers.push(answer);
  }

  postComment(comment: Comment) {
    this.comments.push(comment);
  }

  getUserId() : string {
    return this.id;
  }

  getUserInfo() : {id: string, name: string, email: string} {
    return {
      id: this.id,
      name: this.name,
      email: this.email,
    }
  }

  getQuestions() :Question[] {
    return this.questions;
  }

  getAnswer() : Answer[] {
    return this.answers;
  }

  getComments() : Comment[] {
    return this.comments;
  }
}
