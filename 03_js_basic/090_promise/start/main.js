let a = 0;
console.log(a)

new Promise((resolve, reject) => {
    setTimeout(() => {
        a = 1;
        resolve(a);
    }, 2000)
}).then((b) => {
    console.log(b);
}).catch(() => {
    console.log("catch");
})
