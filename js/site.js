//wrapper function to control the app
function getWord() {

    //get the user's word
    let chara = /[\W_]/g;
    let word = document.getElementById("word").value;

    //validating min number of strings
    if (word.length <= 1) {
        Swal.fire(
            'Something went wrong',
            'Please use at least 2 letters',
            'error'
        )
        return;
    }

    //cleaning string of spaces and charaters
    let cword = word.replace(chara, '');
    cword = cword.toLowerCase();

    //store the reversed word in a variable
    let revWord = flipWord(cword);

    //pass the original and reversed words to the display function
    displayResults(cword, revWord);
}

//this function does the "work" of the app, reversing a string
function flipWord(cword) {

    //create a variable that will store the reversed word
    let revWord = "";

    //loop through the given word one letter at a time starting at the end
    for (let index = cword.length - 1; index >= 0; index--) {
        //store the letter from the loop
        let letter = cword[index];

        //add that letter to the variable created above
        revWord += letter;
    }

    //after the loop send back the reversed word
    return revWord;
}

//this function takes in information and prints it to the screen
function displayResults(cword, revWord) {
    //access the output area
    let output = document.getElementById("output");

    if (revWord == cword) {
        /*output.innerText = `You entered the word ${word}. Reversed is ${revWord}. It is a Palindrome!`;*/
        Swal.fire(
            'This is a valid Palindrome!',
            `The reverse word is ${revWord}`,
            'success'
        )
    } else {

        //replace what is currently inside the <p> element with the phrase below
        /*output.innerText = `You entered the word ${word}. Reversed is ${revWord}`;*/
        Swal.fire({
            icon: 'error',
            title: 'This is not a valid Palindrome!',
            text: `The reverse word is ${revWord}. Please try again!`
        })

    }
}
