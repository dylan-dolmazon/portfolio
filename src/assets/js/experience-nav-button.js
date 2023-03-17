const btn_experiences = document.getElementById('experiences');
const btn_education = document.getElementById('education');
const btn_test = document.getElementById('test');

const content_experiences = document.getElementById('experiences-content');
const content_education = document.getElementById('education-content');
const content_test = document.getElementById('test-content');

btn_education.addEventListener('click', function() {
    addActive(btn_education,content_education);
    removeActive(btn_experiences,btn_test,content_experiences,content_test);
});

btn_experiences.addEventListener('click', function() {
    addActive(btn_experiences,content_experiences);
    removeActive(btn_education,btn_test,content_education,content_test);
});

btn_test.addEventListener('click', function() {
    addActive(btn_test,content_test);
    removeActive(btn_education,btn_experiences,content_education,content_experiences);
});

function addActive(btn,content){
    content.classList.add('active');
    btn.classList.add('active');
}

function removeActive(btn,btn2,content,content2){
    content.classList.remove('active');
    btn.classList.remove('active');
    btn2.classList.remove('active');
    content2.classList.remove('active');
}