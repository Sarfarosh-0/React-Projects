export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export const questions: Question[] = [
  {
    id: 1,
    question:
      "Which programming language is primarily used for web development?",
    options: ["Python", "JavaScript", "C++", "Java"],
    correctAnswer: "JavaScript",
    explanation:
      "JavaScript is widely used to create interactive and dynamic web applications.",
  },
  {
    id: 2,
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Tech Modern Language",
      "Hyper Transfer Machine Language",
      "Home Tool Markup Language",
    ],
    correctAnswer: "Hyper Text Markup Language",
    explanation:
      "HTML stands for Hyper Text Markup Language and defines the structure of web pages.",
  },
  {
    id: 3,
    question: "Which company developed React?",
    options: ["Google", "Microsoft", "Facebook", "Amazon"],
    correctAnswer: "Facebook",
    explanation:
      "React was originally developed by Facebook, now known as Meta.",
  },
  {
    id: 4,
    question: "Which data structure follows the LIFO principle?",
    options: ["Queue", "Stack", "Array", "Linked List"],
    correctAnswer: "Stack",
    explanation:
      "Stack follows Last In, First Out (LIFO), meaning the last inserted element is removed first.",
  },
  {
    id: 5,
    question: "What does CSS stand for?",
    options: [
      "Computer Style Sheets",
      "Creative Style System",
      "Cascading Style Sheets",
      "Colorful Style Sheets",
    ],
    correctAnswer: "Cascading Style Sheets",
    explanation:
      "CSS controls the presentation, layout, and visual appearance of web pages.",
  },
  {
    id: 6,
    question: "Which method converts JSON data into a JavaScript object?",
    options: [
      "JSON.stringify()",
      "JSON.parse()",
      "JSON.convert()",
      "JSON.object()",
    ],
    correctAnswer: "JSON.parse()",
    explanation:
      "JSON.parse() converts a JSON string into a JavaScript value or object.",
  },
  {
    id: 7,
    question: "Which HTTP method is commonly used to retrieve data?",
    options: ["POST", "PUT", "DELETE", "GET"],
    correctAnswer: "GET",
    explanation:
      "The GET method is used to request and retrieve data from a server.",
  },
  {
    id: 8,
    question: "What is the correct way to declare a constant in JavaScript?",
    options: ["var", "let", "const", "static"],
    correctAnswer: "const",
    explanation:
      "The const keyword declares a block-scoped variable that cannot be reassigned.",
  },
  {
    id: 9,
    question: "Which database is a NoSQL database?",
    options: ["MySQL", "PostgreSQL", "MongoDB", "SQLite"],
    correctAnswer: "MongoDB",
    explanation:
      "MongoDB is a NoSQL document-oriented database that stores data in BSON documents.",
  },
  {
    id: 10,
    question: "What does API stand for?",
    options: [
      "Application Programming Interface",
      "Advanced Programming Internet",
      "Application Process Integration",
      "Automated Program Interaction",
    ],
    correctAnswer: "Application Programming Interface",
    explanation:
      "An API defines how different software applications communicate with each other.",
  },
];
