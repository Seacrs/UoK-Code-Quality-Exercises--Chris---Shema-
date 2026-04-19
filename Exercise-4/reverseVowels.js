// In this kata, your goal is to write a function which will reverse the vowels in a string. 
// Any characters which are not vowels should remain in their original position. Here are some examples:

// "Hello!" => "Holle!"
// "Tomatoes" => "Temotaos"
// "Reverse Vowels In A String" => "RivArsI Vewols en e Streng"
// For simplicity, you can treat the letter y as a consonant, not a vowel.

// Good luck!

function reverseVowels(str){
    const VOWELS  = new Set('aeiouAEIOU');
    const vowels = [];
    const arr = str.split("").map(letter => {
        if(VOWELS.has(letter)){
            vowels.push(letter);
            return "*"
        }
        return letter;
    });
    
    return arr.map(letter => {
        if(letter === "*"){
            letter = vowels.pop();
            return letter;
        }
        return letter
    }).join("")
}