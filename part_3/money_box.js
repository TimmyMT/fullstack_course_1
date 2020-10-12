// Реализуйте функцию MoneyBox, который будет создавать объект с двумя методами:
// addCoin - Добавляет 1 монету в копилку 
// getAmount - Возвращает количество монет в копилке 
// Не должно быть возможности задать количество монет напрямую, минуя метод addCoin. При создании в копилке нет монет.

const MoneyBox = function() {
    var money = 0;
    
    this.addCoin = function() { money += 1 };
    this.getAmount = function() { return money };
};

const box = new MoneyBox()
console.log(box.getAmount())
box.addCoin()
box.addCoin()
console.log(box.getAmount())
