let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelector('li');

div.addEventListener('click', function(event) {
  console.log('Div was clicked');
})

ul.addEventListener('click', function(event){
    console.log('Ul was clicked');
})


for(let li of lis){
    li.addEventListner('click', function(event){
    console.log('Li was clicked');
    })
}