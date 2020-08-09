//题目描述
//写一个程序打印1到100这些数字。但是遇到数字为3的倍数的时候，打印“Fizz”替代数字，5的倍数用“Buzz”代替，既是3的倍数又是5的倍数打印“FizzBuzz”。
function fizzbuzz() {
    var info = [];
    for (var num = 1; num <= 100; num++) {
        let result = '';
        if (num % 15 === 0) {
            result = 'FizzBuzz';
        }
        else if (num % 3 === 0) {
            result = 'Fizz';
        } else if (num % 5 === 0) {
            result = 'Buzz';
        } else {
            result = num.toString();
        }
        info.push(result);
    }
    return info;
}
