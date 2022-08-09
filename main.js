const userRegistration = document.querySelector('.form-click>a');

userRegistration.addEventListener('click',(event) => {
    event.preventDefault();
    location.href = '회원가입.html';
    console.log('well done!');
    
});