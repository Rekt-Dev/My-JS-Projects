function abbreviate(string) {
    var words = string.split(" ");
    var answer = "";
    for (var i = 0; i < words.length; i += 1) {

        var count = words[i].length - 2;
        var last = words[i].charAt(words[i].length - 1);
        answer = answer + words[i][0] + count + last;
    }
    return answer;
}

let result = abbreviate("what is up bro years havent seen you")
console.log(result)