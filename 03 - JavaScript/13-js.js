// debugger;
function fn() {
    let a = '444';
    fn1();
    function fn1() {
        let b = 2222;
        console.log(b);
    }
}

fn();