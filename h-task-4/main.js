let obj = [
    {
        name: "Ali",
        surname: "Aliyev",
        age: 10,
        driving: true
    }, {
        name: "Veli",
        surname: "Aliyev",
        age: 17,
        driving: false,
    }, {
        name: "Mehman",
        surname: "Aliyev",
        age: 25,
        driving: true,
    }, {
        name: "Nicat",
        surname: "Aliyev",
        age: 26,
        driving: false
    }, {
        name: "Ayxan",
        surname: "Aliyev",
        age: 15,
        driving: true
    }
];

// bu arrayde driving (suruculuk vesiqesi) true olanlari ve yasi 18+ olanlari secib bir 
// arrayde loga cixardacaqsiz 
// soyadi Aliyev olanlari ve yasi 18 den asagi olanlari  secib bir arrayde geri qaytarin

let driving18 = obj.filter(person => person.driving && person.age >= 18);
console.log(driving18);

let aliyev18 = obj.filter(person => person.surname === "Aliyev" && person.age < 18);
console.log(aliyev18);
