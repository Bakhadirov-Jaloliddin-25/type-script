var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var user = {
    name: "John Doe",
    age: 30,
    email: "johndoe@example.com",
};
// ----------------------------------------------------------------
function fnc(a, b) {
    return a + b;
}
console.log(fnc(1, 2));
// ----------------------------------------------------------------
var Week;
(function (Week) {
    Week["monday"] = "Monday";
    Week["tuesday"] = "Tuesday";
    Week["wednesday"] = "Wednesday";
    Week["thursday"] = "Thursday";
    Week["friday"] = "Friday";
    Week["saturday"] = "Saturday";
    Week["sunday"] = "Sunday";
})(Week || (Week = {}));
console.log(Week.monday);
// ----------------------------------------------------------------
function getArrayLength(arr) {
    return arr.length;
}
console.log(getArrayLength([10, 20, 30]));
console.log(getArrayLength(["a", "b"]));
var status1 = "start";
console.log(status1);
var pet = { bark: true, meow: false };
console.log(pet.bark);
console.log(pet.meow);
// ----------------------------------------------------------------
function guard(a) {
    if (typeof a === "string") {
        return a.toUpperCase();
    }
    else {
        return Math.pow(a, 2);
    }
}
console.log(guard("guard"));
console.log(guard(5));
// ----------------------------------------------------------------
var Car = /** @class */ (function () {
    function Car(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    return Car;
}());
var car = new Car("Mercedes-Benz", 2020);
console.log(car);
var product = {
    name: "Product 1",
    id: 1,
};
console.log(product);
// ----------------------------------------------------------------
var userInfo = [12, "readonly"];
console.log(userInfo);
// ----------------------------------------------------------------
{
    // Inheritance
    var User = /** @class */ (function () {
        function User(name, age) {
            this.name = name;
            this.age = age;
        }
        User.prototype.getInfo = function () {
            return "".concat(this.name, " is ").concat(this.age);
        };
        return User;
    }());
    var Student = /** @class */ (function (_super) {
        __extends(Student, _super);
        function Student(name, age, group) {
            var _this = _super.call(this, name, age) || this;
            _this.group = group;
            return _this;
        }
        return Student;
    }(User));
    var student = new Student("John", 32, "N12");
    console.log(student.getInfo());
    console.log(student.group);
}
{
    // Encapsulation
    var Car_1 = /** @class */ (function () {
        function Car(id, title) {
            this.id = id;
            this.title = title;
        }
        return Car;
    }());
    var car_1 = new Car_1(1, "Lamborghini");
    // car.id = 2 ;// xato
    // console.log(car.id); // xato
    console.log(car_1);
}
{
    // Abstraction
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        Shape.prototype.getInfo = function (n) {
            return "This is ".concat(n);
        };
        return Shape;
    }());
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(r) {
            var _this = _super.call(this) || this;
            _this.r = r;
            return _this;
        }
        Circle.prototype.getPerimeter = function () {
            return 2 * this.r * Math.PI;
        };
        return Circle;
    }(Shape));
    var circle = new Circle(5);
    console.log(circle.getPerimeter());
    console.log(circle.getInfo("Elon Musk"));
}
{
    // Polymorphism
    var Payment = /** @class */ (function () {
        function Payment() {
        }
        Payment.prototype.pay = function (amount) {
            return "Payment of ".concat(amount, " USD");
        };
        return Payment;
    }());
    var CashPayment = /** @class */ (function (_super) {
        __extends(CashPayment, _super);
        function CashPayment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CashPayment.prototype.pay = function (amount) {
            return "Cash payment of ".concat(amount, " USD");
        };
        return CashPayment;
    }(Payment));
    var CardPayment = /** @class */ (function (_super) {
        __extends(CardPayment, _super);
        function CardPayment() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        CardPayment.prototype.pay = function (amount) {
            return "Card payment of ".concat(amount, " USD");
        };
        return CardPayment;
    }(Payment));
    var cash = new CashPayment();
    var card = new CardPayment();
    console.log(cash.pay(500));
    console.log(card.pay(1000));
}
