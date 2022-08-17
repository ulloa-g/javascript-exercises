const repeatString = function(string, number) {
    let word = "";
    if (number < 0) {
        return 'ERROR';
    }
    for (i = 0; i < number; i ++) {
        word += string;
    }
    return word;
};

string = repeatString ('hey', -1);

// Do not edit below this line
module.exports = repeatString;
