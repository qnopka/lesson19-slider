let container = null;
let prev = null;

function createContainer() {
    let carouselContainer = document.createElement('div');
    carouselContainer.setAttribute('id','carousel');

    document.body.append(carouselContainer)
    container = document.querySelector('#carousel');

}

function createSlides(slidesCount) {
    let slidesContainer = document.createElement('ul');
    slidesContainer.setAttribute('class', 'slides');

    for (i = 0; i < slidesCount; i++) {
        let slideItem = document.createElement('li');
        let slideLink = document.createElement('a');

        slideItem.setAttribute(
            'class',
            i === 0 ? 'slides__item active' : 'slides__item'
        );
        slideLink.setAttribute('href', '#');
        slideItem.appendChild(slideLink);
        slidesContainer.appendChild(slideItem);
    }

    container.appendChild(slidesContainer);
}


function createIndicators(slidesCount) {
    let indicators = document.createElement('div');
    indicators.setAttribute('class', 'indicators');

    for (i = 0; i < slidesCount; i++) {
        let indicatorsItem = document.createElement('span');

        indicatorsItem.setAttribute(
            'class',
            i === 0 ? 'indicators__item active' : 'indicators__item'
        );
        indicatorsItem.setAttribute('data-slide-to', i);
        indicators.appendChild(indicatorsItem);
    }

    container.appendChild(indicators);
}

function createControls() {
    let controls = document.createElement('div');
    controls.setAttribute('class', 'controls');
    container.appendChild(controls);


    for (let i = 0; i < 3; i++) {
        let contolItem = document.createElement('div');
        let contolIcon = document.createElement('i');
        const classItem = 'controls__item';
        const classIcon = 'fas';

        switch (i) {
            case 0:
                contolItem.setAttribute('class', `${classItem} controls__prev`);
                contolIcon.setAttribute('class', `${classIcon} fa-chevron-left`);
                break;
            case 1:
                contolItem.setAttribute('class', `${classItem} controls__next`);
                contolIcon.setAttribute('class', `${classIcon} fa-chevron-right`);
                break;
            case 2:
                contolItem.setAttribute('class', `${classItem} controls__pause`);
                contolIcon.setAttribute('class', `${classIcon} fa-play`);
                break;
        }
        controls.appendChild(contolItem);
        contolItem.appendChild(contolIcon);
    }
}

function createCssStyle() {
    let style = document.createElement('style');
    let cssStyle = `
    .slides,
    .controls{
      position: relative;
    }
    
    .indicators {
      display: flex;
    }
    
    .indicators__item {
      display: block;
      width: 15px;
      height: 15px;
      margin: 5px;
      border-radius: 50%;
      background-color: blue;
      box-shadow: 1px 0.3px grey;
    }`;

    style.innerHTML = cssStyle;
    container.appendChild(style);
}

function indicatorsHandler(e) {
    let target = e.target;

    if (target.classList.contains('indicators__item')) {
        target.style.backgroundColor = 'red';

        if (prev !== null) prev.removeAttribute('style');

        prev = target;
    }
}

function setListener() {
    let indicators = document.querySelector('div.indicators');
    indicators.addEventListener('click', indicatorsHandler);
}

function createCarousel(slidesCount = 5) {
    createContainer();
    createSlides(slidesCount);
    createIndicators(slidesCount);
    createControls();
    createCssStyle();
    setListener();
}

createCarousel();