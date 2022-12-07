/*
//Erreur
if (foo) {
}

while (foo) {
}

switch(foo) {
}

try {
    doSomething();
} catch(ex) {

} finally {

}*/

//correct

function doSomething() {
    console.log("doSomething === ");
}

if (true) {
    // empty
}

while (false) {
    /* empty */
}

try {
    doSomething();
} catch (ex) {
    // continue regardless of error
}

try {
    doSomething();
} finally {
    /* continue regardless of error */
}