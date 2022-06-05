const quotes  = [
    {
        name:'Bill gates',
        quotes : 'Scrissi il mio primo Programma di software all età di tredici anni. Serviva per giocare a tris. Il Computer che usavo era grosso, ingombrante, lento e assolutamente irresistibile.'
    },
    {
        name:'Jhon F.Kennedy',
        quotes : 'Quando il potere porta l uomo verso l arroganza, la poesia gli ricorda i suoi limiti. Quando il potere restringe la sfera di interesse dell uomo, la poesia gli ricorda la ricchezza e la diversità dell esistenza. Quando il potere corrompe, la poesia rigenera.'
    },
    {
        name:'Leonardo Da Vinci',
        quotes : 'Saper ascoltare significa, oltre al proprio, il cervello degli altri.'
    },
    {
        name:'Steve Jobs',
        quotes : 'L unico modo per fare un ottimo lavoro è amare quello che fate. Se non avete ancora trovato ciò che fa per voi, continuate a cercare.'
    }
]

const quoteBtn = document.querySelector('#quoteBtn');
const quoteAuthor = document.querySelector('#quoteAuthor');
const quote = document.querySelector('#quote');

quoteBtn.addEventListener('click',displayQuote);

function displayQuote()
{
   let number = Math.floor(Math.random()*quotes.length);
   //console.log(number);
   quoteAuthor.innerHTML = quotes[number].name;
   quote.innerHTML = quotes[number].quotes;
}
