import { Comment } from "./comment";

export interface Commentable {
    addComment(comment: Comment) : void;
    getComment() : Comment[]
} 