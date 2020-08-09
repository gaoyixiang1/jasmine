### JavaScript测试框架 ————jasmine 

BDD风格，以讲故事的方式表达。

只要是能运行JavaScript的地方都可以尽享jasmine测试，比如浏览器，比如node.js。

**全局方法 describe()**
<br> &nbsp; &nbsp;代表着测试套件test suite的实现。

&nbsp; &nbsp;describe(string, function)方法有两个参数

* string（字符串）指整个测试套件的名字或是title
* function（回调函数）指整个测试套件的实现代码

**全局方法 it()**
<br> &nbsp; &nbsp;代表着测试用例/测试规格test specs的实现。

it(string, function)方法有两个参数

* string指整个测试规格的名字或是title
* function指整个测试规格的实现代码/测试代码
一个测试规格里面包含着至少一个验证期望的代码。只有当所有的expectation(assertion)通过了，才表明这个测试规格通过了。只要一个失败的expectation，测试规格就不通过

**expect()**
**describe()**
**fail()**
**beforeEach()**
**afterEach()**
**beforeAll()**
**afterAll()**

**断言库**

数值比较 
```
toBe(===);
not.toBe;
toBeGreaterThan;
toBeLessThan;
toBeGreaterThanOrEqual;
toBeLessThanOrEqual;
toBeCloseTo（四舍五入后比较，有两个参数，一个是值，一个是精度）。
```

布尔值比较 
```
toBeTruthy;
toBeFalsy 
\\注意这里的falsy不是简单的false，javascript中falsy值有：0，false，空的function，空的array和空的object。 
\\详细包括：false，null，undefined，0，NaN,”(空字符串)，”“(空字符串)，document.all
```
对象比较 
```
toEqual，
toBeDefined，
toBeUndefined,
toBeNull
```
其他 
```
toMatch,
toBeNaN,
toContain,
toThrow,
toThrowError
```



### 参考资料

[jasmine学习笔记](https://www.jianshu.com/p/f8f66a8a3907)

[Jasmine的断言](https://blog.csdn.net/wangmiaoyan/article/details/79082985)

[从零开始使用jasmine进行测试](https://www.jianshu.com/p/64ff8cc11b28)
