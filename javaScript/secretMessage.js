//Project 8 : Secret Message

//Transform an array of strings into a secret message!

//Program starts

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop(); //remove the last element

console.log(secretMessage.length);// check the number of the secretMessage

secretMessage.push('to','Program'); // add to and Program to secretMessage


secretMessage[7] = 'right'; // replace easily with right

secretMessage.shift(); //remove the first element

secretMessage.unshift('Programming'); // add Programming to the first element

secretMessage.splice(6, 5,'know'); //remove get,right,the,first,time and replace them with know


console.log(secretMessage.join(' ')); // join the separated messages into a full sentence.

