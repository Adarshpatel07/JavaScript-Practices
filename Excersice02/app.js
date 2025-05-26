let div = document.querySelector('div');
let ul = document.querySelector('ul');
let li = document.querySelector('li');

div.addEventListener('click', function(event) {
  event.stopPropagation();
  console.log('Div was clicked');
})

ul.addEventListener('click', function(event){
        event.stopPropagation();
    console.log('Ul was clicked');
})

for(let lis of li){
    lis.addEventListner('click', function(event){
      event.stopPropagation();
    console.log('Li was clicked');
    })
}