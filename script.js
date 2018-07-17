var database = [
    {
        username: "zuck",
        password: "unblockable"
    }
];

var newsFeed = [
    {
        username: "Bobby",
        timeline: "Why does Zuckerberg act like everyone's stuff is his?"
    },
    {
        username: "mark",
        timeline: "Ha ha ha ha, what's your shtoyle?"
    }
]

var userNamePrompt = prompt("What's your shtoyle?");
var passwordPrompt = prompt("You think you can block me?");

function signIn(username, password){
    if ((username === database[0].username) &&
        (password === database[0].password)) {
            console.log(newsFeed);
        }
    else{
        alert("Ha ha ha ha, your shtoyle is nothing against mine!")
    }
}