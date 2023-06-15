
function logger(log) {
    console.log(log);
}

const logger2 = (log) => {
    console.log(log);
}

const logger3 = log =>console.log(log);

const sum = (a, b) => {
    return a + b;
}

const khaibaomeo = (name, age) => {
    return { ten: name, tuoi: age };
}

const khaibaocho = (name, age) => ({ ten: name, tuoi: age });

const minus = (a, b) => a - b;

console.log(khaibaomeo('chien', 3));


//logger('Hello');

//console.log('Hello Son');

//alert('Hello');



function showAlert(thamso1, thamso2, thamso3) {
    alert(thamso1);
}

//showAlert('Chao Phuong', 'Tham so 2', 3);

logger2(123);

const course ={
    name: 'Hello',
    getName: function (){
        return this.name;
    }
}

console.log(course.getName())
