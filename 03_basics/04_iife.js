// Immediately Invokes Function Expression (IIFE)

(function chai() {
    // named IIFE
    console.log("DB CONNECTED");
})();

((name) => {
    console.log(`DB Connected two ${name}`);
} )("harshit");