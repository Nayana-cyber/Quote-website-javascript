const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote-btn');

newQuoteBtn.addEventListener('click', fetchQuote);

function fetchQuote() {
    fetch('https://dummyjson.com/quotes/random')
        .then(response => response.json())
        .then(data => {
            quoteElement.textContent = data.quote;
            authorElement.textContent = data.author;
        })
        .catch(error => console.error('Error:', error));
}

// Fetch a quote on page load
fetchQuote();