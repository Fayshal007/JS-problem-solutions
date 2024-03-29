//Longest Word in a string

function findLongestword(str) {
    let longestWord = "";
    if (str.trim().length === 0) {
        return false;
    } else {
        let words = str.split(" ")
        for (let i = 0; i < words.length; i++) {
            const element = words[i];
            if (element.length > longestWord.length) {
                longestWord = element
            }

        }
    }
    return longestWord;
}

let result = findLongestword("Watch Thapa Technical javascript course on youotube")
console.log(result);