

function a() {
    console.log('a is running');
    function b(){
        let b1 = 8
        function c(){
            console.log(b1);
        }        
    }
    // console.log('b is running');
    // b()
    console.log(' a is ending');
    
}

console.log(b1);

a()