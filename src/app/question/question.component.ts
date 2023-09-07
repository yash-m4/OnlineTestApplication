import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http'; 
@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit{

  constructor(private router: Router,private httpClient: HttpClient) { }
  questions: any[] = [];
  currentQuestionIndex: number = 0;
  score: number = 0;
  
    ngOnInit(): void {
      this.questions = [
        {
          "questionText": "What does JVM stand for?",
          "options": [
            {
              "text": "Java Virtual Machine",
              "correct": true
            },
            {
              "text": "Java Visual Machine"
            },
            {
              "text": "Java Variable Machine"
            },
            {
              "text": "Java Virtual Memory"
            }
          ],
          
        },
        {
          "questionText": "Which keyword is used for creating an instance of a class in Java?",
          "options": [
            {
              "text": "create"
            },
            {
              "text": "instantiate"
            },
            {
              "text": "instance"
            },
            {
              "text": "new",
              "correct": true
            }
          ],
         
        },
        {
          "questionText": "In Java, which data type is used for representing single characters?",
          "options": [
            {
              "text": "string"
            },
            {
              "text": "char",
              "correct": true
            },
            {
              "text": "character"
            },
            {
              "text": "chr"
            }
          ],
          
        },
        {
          "questionText": "What is the access modifier for a method that can be accessed from anywhere in the same package?",
          "options": [
            {
              "text": "private"
            },
            {
              "text": "public",
              "correct": true
            },
            {
              "text": "protected"
            },
            {
              "text": "default"
            }
          ],
          
        },
        {
          "questionText": "What does OOP stand for in the context of Java programming?",
          "options": [
            {
              "text": "Object-Oriented Programming",
              "correct": true
            },
            {
              "text": "Operator Overloading Principles"
            },
            {
              "text": "Object Optimization Protocol"
            },
            {
              "text": "Object Ownership Process"
            }
          ],
          
        },
        {
          "questionText": "Which keyword is used to define a constant value in Java?",
          "options": [
            {
              "text": "var"
            },
            {
              "text": "const"
            },
            {
              "text": "static"
            },
            {
              "text": "final",
              "correct": true
            }
          ],
         
        },
        {
          "questionText": "What is the Java keyword used for handling exceptions?",
          "options": [
            {
              "text": "throw"
            },
            {
              "text": "try",
              "correct": true
            },
            {
              "text": "catch"
            },
            {
              "text": "exception"
            }
          ],
          
        },
        {
          "questionText": "Which data structure in Java stores elements in a last-in-first-out (LIFO) order?",
          "options": [
            {
              "text": "Stack",
              "correct": true
            },
            {
              "text": "Queue"
            },
            {
              "text": "Array"
            },
            {
              "text": "List"
            }
          ],
          
        },
        {
          "questionText": " What is the purpose of the break statement in a Java switch statement?",
          "options": [
            {
              "text": "To exit the switch block",
              "correct": true
            },
            {
              "text": "To exit the loop"
            },
            {
              "text": " To exit the method"
            },
            {
              "text": "To exit the program"
            }
          ],
         
        }
      ];
    
    }
    
    
  
    selectOption(optionIndex: number): void {
      
      if (this.questions[this.currentQuestionIndex].options[optionIndex].correct === true) {
        this.score += 10;
        console.log('Correct answer. Score: ', this.score);
      } else {
        this.score -= 10;
        console.log('Incorrect answer. Score: ', this.score);
      }
    
      
      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        
        this.router.navigate(['/result'], { queryParams: { score: this.score } 
       
        });
      }
    
    }

}
