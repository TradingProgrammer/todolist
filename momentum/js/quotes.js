const quotes = [
    {quote:"우리는 다른사람이 욕심낼때 겁을 내려하고 다른사람이 겁을 낼 때 욕심부리곤한다.",
    author:"버핏",},

    {quote:"타고있는 배가 항상 샌다는 것을 알게되면 구멍을 막느니 다른 배를 타라 ",
    author:"버핏",},


    {quote:"분산투자는 자신이 무엇을 하고 있는지 잘 모르는 투자가에게만 알맞는 투자다",
    author:"버핏",},


    {quote:"끊임없이 도전하는 사람이 결국 게임의 승자가된다.",
    author:"버핏",},


    {quote:"대박은 꾸준한 수익률을 얻고자 하는 가운데서 탄생한다.",
    author:"버핏",}

];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerText=todaysQuote.quote;
author.innerText = todaysQuote.author;