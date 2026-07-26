const likeButtons = document.querySelectorAll('.card__like');

likeButtons.forEach(button => {

    button.addEventListener('click', function(){
        const currentText = this.textContent;

        let likesCount = parseInt(currentText.split(' ')[1]);

        likesCount++; 

        this.textContent = `♥ ${likesCount}`;

        this.classList.toggle('card__like_active');
    }
);
});

const currentYear = new Date().getFullYear();
document.getElementById('current-yer').textContent = currentYear;