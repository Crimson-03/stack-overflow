import { User } from "./user";
import { v4 as uuid } from "uuid";
export class Comment {
    private author: User;
    private content: string;
    private id: string;

    constructor(content: string, user: User) {
        this.content = content;
        this.author = user;
        this.id = uuid();
    };

    getId(): string {
        return this.id;
    }

    getAuthor() : User {
        return this.author;
    }

    getContent() : string {
        return this.content;
    }
}
