// const xhr = new XMLHttpRequest();

// xhr.onreadystatechange = function(){
//   if(xhr.readyState == 4){
//     if((xhr.status >= 200 && xhr.status < 300) || xhr.status == 304) {
//       alert(xhr.responseText);
//     } else {
    
//       alert("Request was unsuccessful:" + xhr.status);
//     }
//   }  
// };

// const url = '/users/reg';
// console.log(url, 'url')
  
// // xhr.open("get", url, true);
// xhr.open("post", url, true);

// xhr.send("{ name: 'egg', password: 'yeg' }");

// axios.post('/users/reg', {
//   name: '1',
//   password: 'yeg',
//   phone: '13455556666',
// })
// .then(function (response) {
//   console.log(response);
// })
// .catch(function (error) {
//   console.log(error);
// });


const btn = document.querySelector('#btn');
btn.addEventListener('click', function() {
  axios.post('/other', {
    name: '1',
    password: 'yeg',
    phone: '13455556666',
  }, 
  {
    headers: {
      Authorization: 'Bearer ' + sessionStorage.getItem('token')
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
})
