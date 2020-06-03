# Decorator 修飾模式
結構模式裡面的 修飾模式

---

裝飾模式的角色有`元件`和`裝飾`
是繼承關係的替代方案，裝飾的東西不同但是元件不變

---

![](https://i.imgur.com/DPAx5sk.png)


---

程式碼範例：
```javascript
class Pasta {
  constructor() {
    this.price = 0;
  }
  getPrice() {
    return this.price;
  }
}
```
```javascript
class Penne extends Pasta {
  constructor() {
    super();
    this.price = 10;
  }
}
```

---

```javascript
// Decorator本身
class PastaDecorator extends Pasta {
  constructor(pasta) {
    super();
    this.pasta = pasta;
  }
  getPrice() {
    return this.pasta.getPrice();
  }
}
```
```javascript
// Pasta class的 Decorator (Concrete Decorator)
class PestoSauceDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta);
  }
  getPrice() {
    return super.getPrice() + 2;
  }
}
```

---

```javascript
// Pasta class的 Decorator (Concrete Decorator)
class ChickenDecorator extends PastaDecorator {
  constructor(pasta) {
    super(pasta);
  }
  getPrice() {
    return super.getPrice() + 3;
  }
}
```

---

創建了一個包含多重裝飾的Pasta義大利麵實例
包含了醬汁跟配料

---

### Thank you! :monkey: 