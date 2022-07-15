const quotes = [
  {
    quote: "The way to get started is to quit talking and begin1",
    author: "Walt Disney1",
  },
  {
    quote: "The way to get started is to quit talking and begin2",
    author: "Walt Disney2",
  },
  {
    quote: "The way to get started is to quit talking and begin3",
    author: "Walt Disney3",
  },
  {
    quote: "The way to get started is to quit talking and begin4",
    author: "Walt Disney4",
  },
  {
    quote: "The way to get started is to quit talking and begin5",
    author: "Walt Disney5",
  },
  {
    quote: "The way to get started is to quit talking and begin6",
    author: "Walt Disney6",
  },
  {
    quote: "The way to get started is to quit talking and begin7",
    author: "Walt Disney7",
  },
  {
    quote: "The way to get started is to quit talking and begin8",
    author: "Walt Disney8",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];
quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
