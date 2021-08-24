let pronoun = ['the', 'our', 'mine'];
let adj = ['great', 'big', 'small'];
let noun = ['jogger', 'racoon', 'car'];
let extensions = ['.com', '.net', '.io']
var domainName;
var counter = 0;

for (let i = 0; i < pronoun.length; i++) {
    for (let n = 0; n < adj.length; n++) {
        for (let z = 0; z < noun.length; z++) {
            for (let y = 0; y < extensions.length; y++) {

                domainName = pronoun[i] + adj[n] + noun[z] + extensions[y]
                console.log(domainName)
                counter += 1
            }
        }
    }
}

console.log("----------------")
console.log("total number of domain names: " + counter.toString())