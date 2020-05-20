var quotes = ['Calm down, you will get an A on your next test.', 'Keep persevering', 'A little fun will never hurt!', 'Take a break.', 'Why don\'t you go outside?', 'IMPOSSIBRU!', 'I\'m just a glitch in this program... dont mess with me', 'Yes I\'m not a gamer, as shown in my username', 'C', 'Just throwing it out there, I\'m pretty sure I have absolute pitch.', 'Want some food? here:', 'CCCCCC', 'AROOOOOOOOOOOOOOOO!', 'Bacon lead Bacon\'s rebellion!', 'Shay led Shay\'s rebellion', 'Unfortunately Whiskey did not lead the Whiskey rebellion.', 'I WANT AN A+!', 'I was up til two in the morning trying to research Obama\'s last name.', 'I was up all night trying to figure out what year the panic of 1893 started.', 'my hair is around 4 inches long as of day 60 of quarantine.', '---', 'gaming is fun', 'aaaaaaaaaa'];
var count = 0;

function getRandomQuote(){
    document.getElementById('quote').innerHTML = quotes[Math.floor((Math.random() * quotes.length) + 1) - 1];
    count += 1;
}

function addQuote(){
    var addingQuote = prompt("Enter quote to add here - click OK to submit or click CANCEL to dismiss.");
    if (addingQuote != ''){
        quotes.push(addingQuote);
        //alert(quotes);
        alert('Custom quote' + " '" + addingQuote + "' " + 'was added to the list.');
    }
}

function encrypt(){
    var toEncrypt = document.getElementById('quote').innerHTML;
    var toEncryptArray = toEncrypt.split(' ');
    
    var newEncryptArray = [];
    var newString = '';
    //alert(toEncryptArray);

    var posneg = prompt("Shift alphabet forward or backward? Enter '+' to shift forward and '-' to shift backwards.")
    if (posneg = '+'){
        var num = prompt("Enter the value of shifting. (You are shifting in a positive direction)")
        for (var i = 0; i < toEncryptArray.length; i++){
            var newWords = '';
            for(var j = 0; j < toEncryptArray[i].length; j++){
                //var testingvar = 'a';
                //var test2 = 'A';
                //alert(testingvar.toLowerCase() === test2);
                
                if(toEncryptArray[i].charAt(j).toLowerCase() === toEncryptArray[i].charAt(j)){
                    //alert('abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/');
                    var char = 'abcdefghijklmnopqrstuvwxyz0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'
                    var n = char.indexOf(toEncryptArray[i].charAt(j));
                    //alert(n);
                    //alert(num);
                    var total = (Number(n) + Number(num) + 1)
                    //alert(total);
                    var pos = (total % char.length) - 1;
                    //alert(pos);
                    //alert(char.charAt(pos));
                    newWords+=(char.charAt(pos));

                }else{
                    //alert('ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/')
                    var char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789~`!@#$%^&*()_-+={[}]|\:;"\'<,>.?/'
                    var n = char.indexOf(toEncryptArray[i].charAt(j));
                    //alert(n);
                    //alert(num);
                    var total = (Number(n) + Number(num) + 1)
                    //alert(total);
                    var pos = (total % char.length) - 1;
                    //alert(pos);
                    //alert(char.charAt(pos));
                    newWords+=(char.charAt(pos));
                }
            //alert(newWords);
            }

        var newStringModified = newWords + " ";
        //alert(newStringModified);
        newString += newStringModified;        
        }
    }
    document.getElementById('quote').innerHTML = newString;
    
    if (posneg = '-'){
        var num = prompt("Enter the value of shifting. (You are shifting in a negative direction)")

    }else{
        alert('Sorry, I could not recognize that.')
    }
    
}
document.getElementById('btn1').addEventListener('click', encrypt);
document.getElementById('btn2').addEventListener('click', getRandomQuote);
document.getElementById('btn3').addEventListener('click', addQuote);