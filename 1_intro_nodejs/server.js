const http=require('http');
// we are going to be using http to create our first server

console.log(http)
const PORT=3000;
// create the server 
const userData=[
    {
        name:"Paul",
        email:"paul@gmail.com",
        description:"blabla"
    },
    {
        name:"Anna",
        email:"anna@gmail.com",
        description:"blabla"
    }
]

const server=http.createServer((req,res)=>{
console.log(`Recieved ${req.method} request for ${req.url}`);
res.writeHead(200,{
    "content-type":"application/json"
});

res.end(JSON.stringify(userData));
console.log(userData);

// send data above to the client using the res object
})

server.listen(PORT, ()=>{
console.log(`server running on port: ${PORT}`)

})