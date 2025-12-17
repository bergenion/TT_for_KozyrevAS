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
    {
        imageSrc: img1,
        category: 'Marketing',
        title: 'Основы продвижения и рекламы онлайн',
        price: '$180',
        instructor: 'Alice Johnson',
        showDefault: true
    },
    {
        imageSrc: img2,
        category: 'Management',
        title: 'Эффективное управление командой проектов',
        price: '$220',
        instructor: 'Michael Smith',
        showDefault: true
    },
    {
        imageSrc: img3,
        category: 'HR & Recruiting',
        title: 'Современные методы подбора персонала',
        price: '$140',
        instructor: 'Sophia Brown',
        showDefault: true
    },
    {
        imageSrc: img4,
        category: 'Marketing',
        title: 'Стратегии роста бренда и продаж',
        price: '$260',
        instructor: 'Daniel Wilson',
        showDefault: true
    },
    {
        imageSrc: img5,
        category: 'Management',
        title: 'Лидерство и управление изменениями',
        price: '$200',
        instructor: 'Emma Davis',
        showDefault: true
    },
    {
        imageSrc: img6,
        category: 'Design',
        title: 'Креативный дизайн и визуальные концепции',
        price: '$300',
        instructor: 'Olivia Taylor',
        showDefault: true
    },
    {
        imageSrc: img7,
        category: 'HR & Recruiting',
        title: 'Интервью и оценка кандидатов',
        price: '$120',
        instructor: 'James Miller',
        showDefault: true
    },
    {
        imageSrc: img8,
        category: 'HR & Recruiting',
        title: 'Управление талантами и карьерой',
        price: '$240',
        instructor: 'Isabella Moore',
        showDefault: true
    },
    {
        imageSrc: img9,
        category: 'Management',
        title: 'Планирование ресурсов и процессов',
        price: '$160',
        instructor: 'William Anderson',
        showDefault: true
    },
    {
        imageSrc: img10,
        category: 'Marketing',
        title: 'Аналитика и оптимизация кампаний',
        price: '$280',
        instructor: 'Charlotte Thomas',
        showDefault: false
    },
    {
        imageSrc: img11,
        category: 'HR & Recruiting',
        title: 'HR стратегии и корпоративная культура',
        price: '$100',
        instructor: 'Benjamin White',
        showDefault: false
    },
    {
        imageSrc: img12,
        category: 'Development',
        title: 'Основы веб-разработки и программирования',
        price: '$220',
        instructor: 'Amelia Harris',
        showDefault: false
    },
    {
        imageSrc: img13,
        category: 'Marketing',
        title: 'Контент-маркетинг и работа с соцсетями',
        price: '$300',
        instructor: 'Henry Clark',
        showDefault: false
    },
    {
        imageSrc: img14,
        category: 'Development',
        title: 'Разработка приложений и тестирование',
        price: '$180',
        instructor: 'Mia Lewis',
        showDefault: false
    },
    {
        imageSrc: img15,
        category: 'HR & Recruiting',
        title: 'Обучение и развитие сотрудников',
        price: '$260',
        instructor: 'Alexander Walker',
        showDefault: false
    },
    {
        imageSrc: img16,
        category: 'Design',
        title: 'UX/UI дизайн и пользовательский опыт',
        price: '$140',
        instructor: 'Grace Hall',
        showDefault: false
    },
    {
        imageSrc: img17,
        category: 'Development',
        title: 'Современные технологии программирования',
        price: '$200',
        instructor: 'Lucas Allen',
        showDefault: false
    },
];
const CategoryColors = {
    "Marketing": "#03CEA4",
    "Design": "#F52F6E",
    "Development": "#7772F1",
    "HR & Recruiting": "#F89828",
    "Management": "#5A87FC",
}


const fragment = document.createDocumentFragment();
const DEFAULT_CARD_SHOWN = 9;
let cardsLimit = DEFAULT_CARD_SHOWN;


function createCourseCard({imageSrc, category, title, price, instructor, showDefault, categoryColor}) {
    const card = document.createElement('div');
    card.className = 'course-card';

    const imageWrap = document.createElement('div');
    imageWrap.className = 'course-card__image';

    const img = document.createElement('img');
    img.className = 'course-card__image-media';
    img.src = imageSrc;
    img.alt = instructor;
    imageWrap.appendChild(img);

    const content = document.createElement('div');
    content.className = 'course-card__content';

    const cat = document.createElement('span');
    cat.className = 'course-card__category';
    cat.style.background = CategoryColors[category];
    cat.textContent = category;

    const h3 = document.createElement('h3');
    h3.className = 'course-card__title';
    h3.textContent = title;

    const priceEl = document.createElement('p');
    priceEl.className = 'course-card__price';
    priceEl.textContent = price;

    const instructorEl = document.createElement('p');
    instructorEl.className = 'course-card__instructor';
    instructorEl.textContent = '| by ' + instructor;

    content.append(cat, h3, priceEl, instructorEl);
    card.append(imageWrap, content);

    card.style.display = showDefault ? 'block' : 'none';
    return card;
}


function renderCategoryButtons(people) {
    const container = document.getElementById('categories');
    container.innerHTML = '';

    const totalCount = people.length;

    const allBtn = document.createElement('button');
    allBtn.id = 'allBtn';
    allBtn.className = 'courses__category-btn courses__category-btn--active';
    allBtn.textContent = `All (${totalCount})`;
    allBtn.categoryName = 'All';
    container.appendChild(allBtn);

    const categoryCounts = {};
    people.forEach(p => {
        categoryCounts[p.category] = (categoryCounts[p.category] || 0) + 1;
    });

    Object.entries(categoryCounts).forEach(([category, count]) => {
        const btn = document.createElement('button');
        btn.className = 'courses__category-btn';
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
    const categoryButtons = document.querySelectorAll('.courses__category-btn');
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
        
        // Получаем активную категорию
        const activeButton = document.querySelector('.courses__category-btn.courses__category-btn--active');
        const activeCategory = activeButton ? activeButton.categoryName.toLowerCase() : 'all';
        
        let shownCards = 0;
        let filteredCardsCount = 0;
        
        courseCards.forEach(card => {
            const title = card.querySelector('.course-card__title').textContent.toLowerCase();
            const cardCategory = card.querySelector('.course-card__category').textContent.toLowerCase();
            
            const matchesSearch = title.includes(query);
            const matchesCategory = activeCategory === 'all' || cardCategory === activeCategory;
            const matchesBoth = matchesSearch && matchesCategory;
            
            if (matchesBoth) {
                filteredCardsCount += 1;
                
                // Показываем карточку только если она в пределах лимита
                if (shownCards < cardsLimit) {
                    card.style.display = 'block';
                    card.overflowHide = false;
                    shownCards += 1;
                } else {
                    card.style.display = 'none';
                    card.overflowHide = true;
                }
            } else {
                card.style.display = 'none';
                card.overflowHide = false;
            }
        });
        
        // Скрываем кнопку "Load More", если все отфильтрованные карточки уже показаны
        loadMore.style.display = filteredCardsCount > shownCards ? 'block' : 'none';
        
        const categoryCounts = {};
        let allCount = 0;
        courseCards.forEach(p => {
            let category = p.querySelector('.course-card__category').textContent.toLowerCase();
            categoryCounts[category] = categoryCounts[category] || 0;
            const title = p.querySelector('.course-card__title').textContent.toLowerCase();
            if (title.includes(query)) {
                categoryCounts[category] += 1;
                allCount += 1;
            }
        });

        document.getElementById('allBtn').textContent = `All (${allCount})`;

        document.querySelectorAll("#categories button").forEach(button => {
            // Берём текст кнопки, приводим к нижнему регистру
            const text = button.textContent.trim().toLowerCase();

            // Ищем ключ из объекта, который содержится в тексте кнопки

            for (const key in categoryCounts) {
                if (text.includes(key)) {
                    // Заменяем всё, что после названия, на число
                    button.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)} (${categoryCounts[key]})`;
                }
            }
        });
    });

    // 🧭 Фильтрация по категории


    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            cardsLimit = DEFAULT_CARD_SHOWN; //сбрасываем кол-во отображаемых карточек на значение по умолчанию
            let shownCards = 0, filteredCardsCount = 0;

            // Удаляем класс active у всех кнопок
            categoryButtons.forEach(btn => btn.classList.remove('courses__category-btn--active'));
            button.classList.add('courses__category-btn--active');

            const category = button.categoryName.toLowerCase();

            courseCards.forEach(card => {
                const cardCategory = card.querySelector('.course-card__category').textContent.toLowerCase();
                const title = card.querySelector('.course-card__title').textContent.toLowerCase();
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