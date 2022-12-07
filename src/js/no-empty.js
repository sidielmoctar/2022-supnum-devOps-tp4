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

const bool1 = true;
const bool2 = false;

function doSomething() {
    console.log("doSomething === ");
}

if (bool1) {
    // empty
}

while (bool2) {
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