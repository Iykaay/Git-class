// create variables to target the elements
let btn = document.querySelector('#new-quote')
let quote = document.querySelector('.quotes')
let person = document.querySelector('.person')
// create and array of objects of random quotes
const quotes = [
  { quote: "The only limit to our realization of tomorrow is our doubts of today.", person: "Franklin D. Roosevelt" },
  { quote: "In the middle of every difficulty lies opportunity.", person: "Albert Einstein" },
  { quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.", person: "Winston Churchill" },
  { quote: "What lies behind us and what lies before us are tiny matters compared to what lies within us.", person: "Ralph Waldo Emerson" },
  { quote: "Do not wait to strike till the iron is hot; but make it hot by striking.", person: "William Butler Yeats" },
  { quote: "The only way to do great work is to love what you do.", person: "Steve Jobs" },
  { quote: "The best way to predict the future is to invent it.", person: "Alan Kay" },
  { quote: "It always seems impossible until it's done.", person: "Nelson Mandela" },
  { quote: "The only thing we have to fear is fear itself.", person: "Franklin D. Roosevelt" },
  { quote: "The journey of a thousand miles begins with one step.", person: "Lao Tzu" },
  { quote: "Life is what happens when you're busy making other plans.", person: "John Lennon" },
  { quote: "The unexamined life is not worth living.", person: "Socrates" },
  { quote: "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.", person: "Ralph Waldo Emerson" },
  { quote: "I think, therefore I am.", person: "René Descartes" },
  { quote: "You miss 100% of the shots you don't take.", person: "Wayne Gretzky" },
  { quote: "To live is the rarest thing in the world. Most people exist, that is all.", person: "Oscar Wilde" },
  { quote: "That which does not kill us makes us stronger.", person: "Friedrich Nietzsche" },
  { quote: "In the end, we will remember not the words of our enemies, but the silence of our friends.", person: "Martin Luther King Jr." },
  { quote: "The only true wisdom is in knowing you know nothing.", person: "Socrates" },
  { quote: "The purpose of our lives is to be happy.", person: "Dalai Lama" },
  { quote: "In a Journey of Success Everyone is a Suspect", person: "ukpabi peter uchenna" },
  { quote: "hate will only bring more hate", person: "ukpabi peter uchenna" },
  {quote:" In order to succeed, ask yourself this four questions, why?, why not?, why not me?, why not now?",person:"ukpabi peter uchenna"}
];
// add eventListener to the button with id of new-quote
btn.addEventListener('click', function () {
  // use the Math method to generate random quotes betwwen the number of quotes in the array
  let random = Math.floor(Math.random() * quotes.length)
  // modify the content of the quote by indexing the variable random, which holds the value of the Math method
    quote.innerText = quotes[random].quote
person.innerText=quotes[random].person
})
