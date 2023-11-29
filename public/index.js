const ul = document.querySelector('ul');
const menu = document.querySelector('.menu');
const nav = document.querySelector('nav').querySelectorAll('li');

// funtion for When we Tapped the menu
function toggleNav() {
    ul.classList.toggle('fromTop');
};
menu.addEventListener('click', toggleNav);

// * Add Remove Active Class 
// function addRemoveActive() {
//     nav.forEach(li => {
//         li.addEventListener('click', function () {
//             nav.forEach(navbar => navbar.classList.remove('active'))

//             this.classList.add('active')
//         })
//     });
// };
// addRemoveActive();




// * Counter Number Script:=========>>
const valueDisplays = document.querySelectorAll('.number');

let interval = 150;

valueDisplays.forEach((valueDisplay) => {
    const CountNumber = () => {
        let targetValue = parseInt(valueDisplay.getAttribute('data-val'));
        let initialValue = parseInt(valueDisplay.textContent);
        let duration = Math.floor(targetValue / interval);

        if (initialValue < targetValue) {
            valueDisplay.textContent = duration + initialValue

            setTimeout(CountNumber, 10)
        }
    }
    CountNumber();
});


//* Testimonial Slider Script:=========>>
//TODO: Constant Stored Here:
const sliderBox = document.querySelectorAll('.slider_box');
const leftLine = document.querySelector('.left_line');
const rightLine = document.querySelector('.right_line');


// * when we Tapped to rightLine to move Slider 
function updateSlider() {
    rightLine.addEventListener('click', function () {
        sliderBox.forEach((slider => {
            slider.style.transform = 'translateX(-325%)'
            leftLine.classList.remove('line_active'); //! Active Class Removed
            this.classList.add('line_active');
            updateActiceSlilder();

        }));

    });
    // * when we Tapped to leftLine to backMove Slider 
    leftLine.addEventListener('click', function () {
        sliderBox.forEach((slider => {
            slider.style.transform = 'translateX(0)'
            rightLine.classList.remove('line_active');
            this.classList.add('line_active')
            updateActiceSlilder();

        }));
    });



}
updateSlider();

// * When Slider Move and the Active-Slider Will add to the next sliderInedx[4]
function updateActiceSlilder() {
    rightLine.addEventListener('click', function () {
        sliderBox[1].classList.remove('active-slider'); //! Active Class Removed
        sliderBox[4].classList.add('active-slider')

    });

    leftLine.addEventListener('click', function () {
        sliderBox[1].classList.add('active-slider');
        sliderBox[4].classList.remove('active-slider'); //! Active Class Removed
    })
}
updateActiceSlilder();





// * Frequently Asked Question Script:=========>>
//TODO: Constant Stored Here:
const faqsHeaderEl = document.querySelectorAll('.accordion_header');
const faqsItemsEl = document.querySelectorAll('.accordion_item');
const faqsButtonEl = document.querySelectorAll('.accordion_button');



// TODO: foreach for Parent faqsItems
faqsItemsEl.forEach((faqs) => {
    faqs.addEventListener('click', () => {
        faqs.classList.toggle('faqsToggle')


    });
    classListAdd(); // TODO: The Bottom Funtion Call Here

});

// TODO: funtion for The Parent => Child accorion Header
function classListAdd() {
    faqsHeaderEl.forEach((accordion) => {
        accordion.addEventListener('click', () => {
            accordion.classList.toggle('faqs_active');

        });

    });

};














