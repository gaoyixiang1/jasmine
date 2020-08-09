describe("fizzbuzz",function(){
    it("is 3 times",function(){
        let i = 3;
        let result = fizzbuzz();
        expect(result[i-1]).toBe('Fizz')
    })
    it("is 5 times",function(){
        let i = 5;
        let result = fizzbuzz();
        expect(result[i-1]).toBe('Buzz')
    })
    it("is 3 and 5 times",function(){
        let i = 15;
        let result = fizzbuzz();
        expect(result[i-1]).toBe('FizzBuzz')
    })
    it("is not 3 and 5 times",function(){
        let i = 8;
        let result = fizzbuzz();
        expect(result[i-1]).toBe('8')
    })
})