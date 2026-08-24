const links = document.querySelectorAll('.nav-link');
const rolesElement = document.querySelector('.roles');

links.forEach(link => {
    link.addEventListener('click', function() {

        link.classList.add('focus');

        setTimeout(function() {
            link.classList.remove('focus');
        }, 3000);

    });
});

let roles = ["Web Developer", "Frontend Developer", "Backend Developer", "Full Stack Developer"];
let index = 0;
setInterval(function(){
    rolesElement.textContent = roles[index];
    index++;
    if(index >= roles.length){
        index = 0;
    }
}, 2000);