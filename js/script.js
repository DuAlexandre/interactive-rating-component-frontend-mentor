const selectRating = () => {
    let navRating = document.querySelector('#ratingNav');
    navRating.addEventListener('click', (event) => {
        let rating = event.target;
        if (rating.classList.contains('rating')) {
            let select = document.querySelector('.selected');
            select.classList.remove('selected')
            rating.classList.add('selected')
        }
    })
}

selectRating();



