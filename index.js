import './styles.scss'
import img1 from '/images/human (1).jpg';
import img2 from '/images/human (2).jpg';
import img3 from '/images/human (3).jpg';
import img4 from '/images/human (4).jpg';
import img5 from '/images/human (5).jpg';
import img6 from '/images/human (6).jpg';
import img7 from '/images/human (7).jpg';
import img8 from '/images/human (8).jpg';
import img9 from '/images/human (9).jpg';
import img10 from '/images/human (10).jpg';
import img11 from '/images/human (11).jpg';
import img12 from '/images/human (12).jpg';
import img13 from '/images/human (13).jpg';
import img14 from '/images/human (14).jpg';
import img15 from '/images/human (15).jpg';
import img16 from '/images/human (16).jpg';
import img17 from '/images/human (17).jpg';

const people = [
    { imageSrc: img1, category: 'Marketing', title: 'Основы продвижения и рекламы онлайн', price: '$180', instructor: 'Alice Johnson', showDefault: true },
    { imageSrc: img2, category: 'Management', title: 'Эффективное управление командой проектов', price: '$220', instructor: 'Michael Smith', showDefault: true },
    { imageSrc: img3, category: 'HR & Recruiting', title: 'Современные методы подбора персонала', price: '$140', instructor: 'Sophia Brown', showDefault: true },
    { imageSrc: img4, category: 'Marketing', title: 'Стратегии роста бренда и продаж', price: '$260', instructor: 'Daniel Wilson', showDefault: true },
    { imageSrc: img5, category: 'Management', title: 'Лидерство и управление изменениями', price: '$200', instructor: 'Emma Davis', showDefault: true },
    { imageSrc: img6, category: 'Design', title: 'Креативный дизайн и визуальные концепции', price: '$300', instructor: 'Olivia Taylor', showDefault: true },
    { imageSrc: img7, category: 'HR & Recruiting', title: 'Интервью и оценка кандидатов', price: '$120', instructor: 'James Miller', showDefault: true },
    { imageSrc: img8, category: 'HR & Recruiting', title: 'Управление талантами и карьерой', price: '$240', instructor: 'Isabella Moore', showDefault: true },
    { imageSrc: img9, category: 'Management', title: 'Планирование ресурсов и процессов', price: '$160', instructor: 'William Anderson', showDefault: true },
    { imageSrc: img10, category: 'Marketing', title: 'Аналитика и оптимизация кампаний', price: '$280', instructor: 'Charlotte Thomas', showDefault: false },
    { imageSrc: img11, category: 'HR & Recruiting', title: 'HR стратегии и корпоративная культура', price: '$100', instructor: 'Benjamin White', showDefault: false },
    { imageSrc: img12, category: 'Development', title: 'Основы веб-разработки и программирования', price: '$220', instructor: 'Amelia Harris', showDefault: false },
    { imageSrc: img13, category: 'Marketing', title: 'Контент-маркетинг и работа с соцсетями', price: '$300', instructor: 'Henry Clark', showDefault: false },
    { imageSrc: img14, category: 'Development', title: 'Разработка приложений и тестирование', price: '$180', instructor: 'Mia Lewis', showDefault: false },
    { imageSrc: img15, category: 'HR & Recruiting', title: 'Обучение и развитие сотрудников', price: '$260', instructor: 'Alexander Walker', showDefault: false },
    { imageSrc: img16, category: 'Design', title: 'UX/UI дизайн и пользовательский опыт', price: '$140', instructor: 'Grace Hall', showDefault: false },
    { imageSrc: img17, category: 'Development', title: 'Современные технологии программирования', price: '$200', instructor: 'Lucas Allen', showDefault: false },
];



const fragment = document.createDocumentFragment();
const DEFAULT_CARD_SHOWN = 9;
let cardsLimit = DEFAULT_CARD_SHOWN;


function createCourseCard({imageSrc, category, title, price, instructor, showDefault}) {
    const card = document.createElement('div');
    card.className = 'course-card';

    const imageWrap = document.createElement('div');
    imageWrap.className = 'course-image';

    const img = document.createElement('img');
    img.src = imageSrc;
    img.alt = instructor;
    imageWrap.appendChild(img);

    const content = document.createElement('div');
    content.className = 'course-content';

    const cat = document.createElement('span');
    cat.className = 'course-category';
    cat.textContent = category;

    const h3 = document.createElement('h3');
    h3.className = 'course-title';
    h3.textContent = title;

    const priceEl = document.createElement('p');
    priceEl.className = 'course-price';
    priceEl.textContent = price;

    const instructorEl = document.createElement('p');
    instructorEl.className = 'course-instructor';
    instructorEl.textContent = '| by ' + instructor;

    content.append(cat, h3, priceEl, instructorEl);
    card.append(imageWrap, content);

    card.style.display = showDefault ? '' : 'none';
    return card;
}


function renderCategoryButtons(people) {
    const container = document.getElementById('categories');
    container.innerHTML = ''; // очистим на всякий случай

    // Считаем количество всех элементов
    const totalCount = people.length;

    // Создаём кнопку "All"
    const allBtn = document.createElement('button');
    allBtn.id = 'allBtn';
    allBtn.className = 'active';
    allBtn.textContent = `All (${totalCount})`;
    allBtn.categoryName = 'All';
    container.appendChild(allBtn);

    // Считаем количество по категориям
    const categoryCounts = {};
    people.forEach(p => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });

    // Создаём кнопки для каждой категории
    Object.entries(categoryCounts).forEach(([category, count]) => {
        const btn = document.createElement('button');
        btn.textContent = `${category} (${count})`;
        btn.categoryName = category;
        container.appendChild(btn);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCategoryButtons(people);

    const grid = document.getElementById('courseGrid');
    people.forEach(c => fragment.appendChild(createCourseCard(c)));
    grid.appendChild(fragment);
    const loadMore = document.getElementById('showMore');
    const searchInput = document.getElementById('searchInput');
    const categoryButtons = document.querySelectorAll('.categories button');
    const courseCards = document.querySelectorAll('.course-card');


    //Увеличиваем кол-во отображаемых карточек на 6
    loadMore.addEventListener('click', () => {
        cardsLimit += 6;

        let shownCards = 0, overflowHiddenCardsCounter = 0;
        courseCards.forEach(card => {
            if (card.style.display !== 'none') {
                shownCards += 1;
            }

            if (card.overflowHide && shownCards < cardsLimit) {
                card.style.display = 'block';
                card.overflowHide = false;
                shownCards += 1;
            }

            overflowHiddenCardsCounter += card.overflowHide ? 1 : 0;
            loadMore.style.display = overflowHiddenCardsCounter > 0 ? 'block' : 'none';
        });

    });


    // 🔍 Поиск по названию курса
    searchInput.addEventListener('input', () => {
        const query = searchInput.value.toLowerCase();
        courseCards.forEach(card => {
            const title = card.querySelector('.course-title').textContent.toLowerCase();
            card.style.display = title.includes(query) ? 'block' : 'none';
        });
    });

    // 🧭 Фильтрация по категории


    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            cardsLimit = DEFAULT_CARD_SHOWN; //сбрасываем кол-во отображаемых карточек на значение по умолчанию
            let shownCards = 0, filteredCardsCount = 0;

            // Удаляем класс active у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const category = button.categoryName.toLowerCase();

            courseCards.forEach(card => {
                const cardCategory = card.querySelector('.course-category').textContent.toLowerCase();
                const title = card.querySelector('.course-title').textContent.toLowerCase();
                const query = searchInput.value.toLowerCase();

                const matchesCategory = category === 'all' || cardCategory === category;
                const matchesSearch = title.includes(query);


                if (matchesCategory && matchesSearch && (shownCards < cardsLimit)) {
                    card.style.display = 'block';
                    shownCards += 1;
                } else {
                    card.style.display = 'none';

                }

                if (matchesCategory && matchesSearch) {
                    filteredCardsCount += 1;
                }

                card.overflowHide = matchesCategory && matchesSearch && (shownCards >= cardsLimit);

            });
            loadMore.style.display = filteredCardsCount > shownCards ? 'block' : 'none';

        });
    });

    document.getElementById('allBtn').click();
});