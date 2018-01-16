const Rx = require("rx")
class User {
    constructor(itemA, itemB) {
        let obs = Rx.Observable.of(itemA,itemB);
        let sum$ = obs.reduce((acc, item) => (acc + item));
        return {
            observable: sum$
        }
    }
}
class Recived {
    constructor(observable) {
        console.dir(observable);
        const subscription = observable
            .subscribe(
            price => console.log(`the result is: ${price}`),
            err => console.log(`Something went wrong: ${err.message}`)
            );
    }
}
const a = 200;
const b = 20;
const user = new User(a, b);
const recvie = new Recived(user.observable);
