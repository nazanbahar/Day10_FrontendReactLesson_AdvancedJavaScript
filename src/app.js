let sayi1 = 10 
sayi1 = "Engin Demiroğ"
let student = {id:1, name:"Engin"} 
console.log(student);

function save(puan=10, ogrenci) { 
    console.log(ogrenci.name + " : " + puan) 
}
save(undefined, student); 

let student2 = [student, {id:2, name:"Halit"},
"Ankara", {city:"İstanbul"}]
console.log(student2)