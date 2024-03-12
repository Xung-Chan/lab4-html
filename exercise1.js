function test() {
    let a = /\w@\w.\w/
    let b = 'abc@xyz.com'
    console.log(a.test(b));

}