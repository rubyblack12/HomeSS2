class Company {
    name;
    astablishedDate;
    country;
    bussinessType;
    employees = [];
    constructor(name, astablishedDate, country, bussinessType, employees) {
        this.name = name;
        this.astablishedDate = astablishedDate;
        this.country = country;
        this.bussinessType = bussinessType;
        this.employees = employees;
    }
    addEmployees(employees) {

    }
    showAllEmployees() {
        this.employees.forEach(function(employee, index) {
            console.log(`${index+1}. ${employee.name}, ${employee.age}, ${employee.sex}, ${employee.address}`);
        })

    }
    showCEO() {
        this.employees.forEach(function(employee, index) {
            // console.log(employee instanceof CEO);
            if (employee instanceof CEO) {
                console.log(`${index+1}. ${employee.name}, ${employee.age}, ${employee.sex}, ${employee.strategy} `);
            }
        })
    }
    showManagers() {
        console.log('Managers');

    }
    showStaff() {
        console.log('Stall');
    }

};
class Employee {
    name;
    age;
    sex;
    address;
    constructor(name, age, sex, address) {
        this.name = name;
        this.age = age;
        this.sex = sex;
        this.address = address;
    }
    about() {
        console.log(`My name is ${this.name}, I'm ${this.age} yearold`);
    }
}
class CEO extends Employee {
    strategy;
    constructor(name, age, sex, address, strategy) {
        super(name, age, sex, address);
        this.strategy = strategy;
    }
}
class Managers extends Employee {
    managemenStyle;
    constructor(name, age, sex, address, managemenStyle) {
        super(name, age, sex, address);
        this.managemenStyle = managemenStyle
    }
}
class Staff extends Employee {
    experience;
    constructor(name, age, sex, address, experience) {
        super(name, age, sex, address);
        this.experience = experience;
    }

}
// let mindX = new Company("MindX", '2020-3-15', 'Viet Nam', 'Open', []);
// console.log(mindX);

let tung = new CEO('Nguyen Thanh Tung', 35, 'Nam', 'Ha Noi', 'Cong dong mo');
let tuyen = new Managers('Nguyen Thanh Tung', 35, 'Nam', 'Ha Noi', 'Cong dong mo');
let hoai = new Managers('Nguyen Thanh Tung', 35, 'Nam', 'Ha Noi', 'Cong dong mo');
let tien = new Managers('Nguyen Thanh Tung', 35, 'Nam', 'Ha Noi', 'Cong dong mo');
let teo = new Managers('Nguyen Thanh Tung', 35, 'Nam', 'Ha Noi', 'Cong dong mo');
let ngeo = new Managers('Nguyen Thanh Tung', 35, 'Nam', 'Ha Noi', 'Cong dong mo');
console.log(tung);

let h1 = new Staff('So1', 24, 'nu', 'Ha Noi', 1);
let h2 = new Staff('So2', 24, 'nam', 'Ha Noi', 2);
let h3 = new Staff('So3', 24, 'nu', 'Ha Noi', 12);
let h4 = new Staff('So4', 24, 'nam', 'Ha Noi', 13);
let h5 = new Staff('So5', 24, 'nu', 'Ha Noi', 13);
let h6 = new Staff('So6', 24, 'nu', 'Ha Noi', 17);
let h7 = new Staff('So7', 24, 'nam', 'Ha Noi', 17);
let h8 = new Staff('So8', 24, 'nu', 'Ha Noi', 15);
let h9 = new Staff('So9', 24, 'nu', 'Ha Noi', 12);
let h10 = new Staff('So10', 24, 'nu', 'Ha Noi', 19);

let employees = [tung, tuyen, hoai, tien, teo, ngeo, h1, h2, h3, h4, h5, h6, h7, h8, h9, h10]
let mindX = new Company("MindX", '2020-3-15', 'Viet Nam', 'Open', employees);
mindX.showCEO()
mindX.showAllEmployees()