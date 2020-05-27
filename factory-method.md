---
slideOptions:
  transition: slide
---

# 物件導向 設計模式
By Steven Wu

---

![](https://cf-assets1.tenlong.com.tw/images/85778/medium/9572054112.jpg)

此書包含了 23 個 design patterns
由Eric Gamma、Richard Hel、Ralph Johnson 和 John Vlissides 編目

主要分成兩個部分

---

# 第一部分

### 第一章

主要介紹了設計模式是什麼，以及它在設計物件導向的軟體時能夠幫上什麼忙

### 第二章

舉出了一個實體案例實際說明該如何運用設計模式去設計一個軟體

---

# 第二部分

### 第三、四、五章

這本書的精髓所在---設計模式型錄

---

第三章：生成模式 (Creational Patterns)
第四章：結構模式 (Structural Patterns)
第五章：行為模式 (Behavioral Patterns)

---

# Factory Method 工廠方法模式

生成模式裡面的 工廠方法模式

一個 `工廠` 和 `商品` 是兩個主要的主角
主要的概念是 `創造者/工廠` 幫你做出你想要的 `產品/商品`

---

![](https://i.imgur.com/anfnpPc.png)


---

你要的商品會有一個 `factory method` 去幫你產出你想要的商品/物件
`factory method` 可以讓你帶參數由此增加延展性跟彈性
並可以用來擴充 製造出來的商品物件類型

---

程式碼範例：
```javascript
class Lexus {
  constructor(model, price) {
    this.model = model;
    this.price = price;
  }
}
```

```javascript
class LexusFactory {

  static create(type) {
    if (type === 'RC')
      return new Lexus(type, 10000);
    if (type === 'LFA')
      return new Lexus(type, 22000);
  }
}

export default LexusFactory;
```

---

```javascript
const rc = LexusFactory.create('RC');
const lfa = LexusFactory.create('LFA');

rc.price; // 10000
lfa.price; // 22000
```

---

### Thank you! :sheep: 
