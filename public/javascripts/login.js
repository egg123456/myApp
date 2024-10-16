
const loginBtn = document.querySelector('#login');

loginBtn.addEventListener('click', function() {
  const loginForm = document.querySelector('#loginForm');
  var fd = new FormData(loginForm); 
  console.log(fd, 'fddddd')
  axios.post('/users/login', {
    name: '1',
    password: fd.get('password'),
    phone: fd.get('phone'),
  })
  .then(function (response) {
    const { data: { token } } = response;
    sessionStorage.setItem('token', token)
    console.log(response);
    location.reload();
    // axios.get(document.referrer, {
    //   params: {
    //     name: '1',
    //     password: 'yeg',
    //     phone: '13455556666',
    //   },
    //   headers: {
    //     Authorization: 'Bearer ' + sessionStorage.getItem('token')
    //   }
    // })
    // .then(function (response) {
    //   document.body.innerHTML = response;
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });
  })
  .catch(function (error) {
    console.log(error);
  });
})