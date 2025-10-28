import { StackOverflow } from "./stackOverflow";

const stackOverflow = StackOverflow.getInstance();

const user1 = stackOverflow.addUser('krishan kumar', 'krishan.kumar1@rupyy.com');
const user2 = stackOverflow.addUser('manav maheshwari', 'manav.maheshwari@rupyy.com');

const question1 = stackOverflow.addQuestion(
  "Job Referral",
  "How to ask for the referral for the job opening?",
  ["jobs", "referrals", "sde"],
  user1.getUserId()
);


const answer = stackOverflow.addAnswer(
  "I can give you referral, kindly reach me in the comment sectioin",
  question1!,
  user2.getUserId()
);

console.log('Questoin info=========');
console.log('Questoin tags=========');
console.log(question1?.getTags());
console.log('Question autho', question1?.getAuthor());
console.log('attached answer', question1?.getAnswer())