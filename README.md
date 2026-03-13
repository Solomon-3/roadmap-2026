# roadmap-2026
My software engineering roadmap practice and experiments


RULES
# always know where you are ...'pwd'
# see what is inside the folder...'ls' or 'ls -la'
# cd, cd .. , cd ~ , cd -
# mkdir, touch, ls......'mkdir practice && cd practice'  engineers combine commands
# read files from terminal....'cat file.txt'print the whole file...... 'nano file.txt'to write into the file ....'clear' reset the screen...


always install using NVM (node version manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
source ~/.bashrc
nvm --version
nvm install --lts
node -v
npm -v                   npm is what install libraries like react, expressjs, nextjs

so what is node
simply a JS runtime that allows JS run outside chrome,firefox,edge ie browser

'touch hello.js'
'nano hello.js'
'''
console.log("Hello Backend World");
const name = "Spencer";
console.log("Hello "+ name);
'''
'node hello.js'

so what exactly happend?
read the file -> execute JS -> print result
that is the same result when running APIs, servers, backend services



day1
1)the Node runtime model
2)the event loop idea
3)the module system

1) the node runtime model
when you run 'node hello.js' === this is what happens internally 'OS -> noderuntime -> JS engine -> your code'
the engine inside Node is called the V8 JSE ...it was initially built for google chrome

so Node is just 'V8 + system tools + networking + file access'
thats why node can : read files, run servers, talk to database, handle APIs

2) the event idea
node doesnt run code like traditional programming languages
node mostly uses one main thread and an event loop
start program -> run current node -> send slow tasks away (timers, I/O) -> continue executing -> when slow task finishes, event loop runs callback

example our 'start, middle, end program'

3) the module system
node programs are split into file ie server.js, database.js and each file is called a module
'''
function add (a,b){
    return a + b;
module.exports = add;
}
'''
so that was our math.js file 

so lets use it in another file
'''
const add = require("./math");
console.log(add(3,4));
'''
this is how large backend systems stay oranized
