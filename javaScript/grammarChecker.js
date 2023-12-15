//Project 10: Grammar Checker
// use what you know about iterating over arrays 
//to gather information and improve the quality of a paragraph.

//Program starts

let story = 'Last weekend, I took literally the most beautifull bike ride of my life. The route is called "The 9W to Nyack" and it stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it literally took me an entire day. I stopped at Riverbank State Park to take some artsy photos. It was a short stop, though, because I had a freaking long way to go. After a quick photo op at the very popular Little Red Lighthouse I began my trek across the George Washington Bridge into New Jersey. The GW is a breathtaking 4,760 feet long! I was already very tired by the time I got to the other side. An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautifull park along the coast of the Hudson. Something that was very surprising to me was that near the end of the route you literally cross back into New York! At this point, you are very close to the end.';

let storyWords = story.split(' '); // separate each word in the story using space character

let count = 0;

storyWords.forEach( word=>
  count +=1);

console.log(storyWords.join(' ')); // to join or turn it back to the original readable string


let unnecessaryWord = 'literally';

//Filtering words
storyWords = storyWords.filter( word => word!= unnecessaryWord);


//replacing words
let misspelledWord = 'beautifull';

storyWords = storyWords.map((word) => {
  if (word === misspelledWord){
    return 'beautiful';
  } else{
    return word;
  }
});


//Finding bad words
let badWord = 'freaking';

let badWordIndex = storyWords.findIndex(word =>  word === badWord);

storyWords[78] = 'really';

//Rearrange all the text 
let lengthCheck = storyWords.every(word => word.length <= 10);

let WordLengthMoreThanTen = storyWords.findIndex(word => word.length >= 10)

storyWords[94]='glorious';

console.log(storyWords.join(' '));