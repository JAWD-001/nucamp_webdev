const messages = [
    'how are you doing',
    'what are you up to',
    'would you like to get a bite later'
];

// const sweetMessages = [
//     'how are you doing, sweetie?',
//     'what are you up to, sweetie?',
//     'would you like to get a bite later, sweetie?',
// ];

// const sweetMessages = []

// function newSweetMsg(messages){
//     for (let i = 0; i < messages.length; i++){
//         const newMsg = `${messages[i]}, sweetie!`;
//         sweetMessages.push(newMsg);
//     }
//     console.log(sweetMessages);
// }

// newestSweetMsg(messages);



const newestSweetMsg = messages.map((message) =>`${message}, sweetie!`);
console.log(newestSweetMsg);
