//Project 8 Whale Talk

//Take a phrase like ‘turpentine and turtles’ 
//and translate it into its “whale talk” equivalent: ‘UUEEIEEAUUEE’.

let input = "I don't know much."; // create a text to translate into whale talk

const vowels = ['a', 'e', 'i', 'o', 'u']; //create a whale's language

const resultArray = []; //to store the text from input

//To iterate each letter in the input
for (let i =0; i < input.length; i++){
    //double letter if condtion met
    if (input[i]==='e'|| input[i]==='u'){
      resultArray.push(input[i]);
    }
      //console.log(input[i]);
      for (let j=0; j <vowels.length; j++){
         // console.log(vowels[j]);
          if (input[i] === vowels[j]){
            let equalLetters = (vowels[j]);
            resultArray.push(equalLetters);
  
          }
      }
  };
  //Join each letter into Whale's language and capitalize them
  const resultString = (resultArray.join('')).toUpperCase();
  console.log(resultString);