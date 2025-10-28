import { Answer } from "./answer";
import { Comment } from "./comment";
import { Commentable } from "./commentable";
import { Question } from "./question";
import { Tag } from "./tag";
import { User } from "./user";

export class StackOverflow {
    private questions: Map<string, Question>;
    private answers: Map<string, Answer>;
    private users: Map<string, User>;
    private comments: Map<string, Comment>;
    private tags: Map<string, Tag>;
    private static instance: StackOverflow | null = null;


    constructor() {
        this.answers = new Map();
        this.questions = new Map();
        this.users = new Map();
        this.comments = new Map();
        this.tags = new Map();
    }

    static getInstance() : StackOverflow {
        if(!this.instance) {
            this.instance = new StackOverflow();
        }
        return this.instance;
    } 

    addUser(name: string, email: string) {
        const user = new User(name, email);
        this.users.set(user.getUserId(), user);
        return user;
    }

    addQuestion(topic: string, content: string, tags: string[], userId: string) {
        const user = this.users.get(userId);
        if(!user) return;
        const tagList: Tag[] = [];
        for(const tagName of tags) {
            let tag = this.tags.get(tagName);
            if(!tag) {
                tag = new Tag(tagName);
            }
            tagList.push(tag);
            this.tags.set(tagName, tag);
        }
        const question = new Question(user, topic, content, tagList);
        this.questions.set(question.getId(), question);
        return question;
    }

    addAnswer(content: string, question: Question, userId: string) {
        const user = this.users.get(userId);
        if(!user) return;
        const ans = new Answer(content, question, user);
        question.attachAnswer(ans);
        this.answers.set(ans.getId(), ans);
        return ans;
    }

    addComment(content: string, commentable: Commentable, userId: string) {
        const user = this.users.get(userId);
        if(!user) return;
        const comment = new Comment(content, user);
        commentable.addComment(comment);
        this.comments.set(comment.getId(), comment)
    }
}