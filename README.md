# Адаптивный сайт "Системная интеграция"

## Адаптивная верстка

- HTML-страница `"Системная интеграция"` создана на основе макета Figma.
- Верстка адаптирована для корректного отображения на различных разрешениях (1900px, 1600px, 390px и промежуточных значениях).

## Реализация попап окон

- Создана разметка для 4-х попап окон в HTML-странице.
- Стилизованы попап окна, обеспечено их скрытие при загрузке страницы.
- Написан JavaScript-код (`index.js`) для открытия/закрытия попап окон при клике на плитки.
- Реализовано динамическое позиционирование попапов относительно карточек (с учетом адаптивности).
- Добавлена возможность закрытия попапов по клику вне области попапа.

## JavaScript

### DOMContentLoaded

Код обернут в `DOMContentLoaded`, что гарантирует, что скрипт запустится после полной загрузки DOM.

### Поиск элементов

Используются `querySelectorAll` и `getElementById` для поиска необходимых элементов.

### Проверка `popupContainer`

Есть проверка на наличие `popupContainer`, что предотвращает ошибку в случае его отсутствия.

### Функция закрытия попапов

Функция `closePopups` отвечает за закрытие всех открытых попапов и сброс их стилей.

### Функция открытия попапов

Функция `openPopup` отвечает за открытие попапа по клику, позиционирование, установку стилей.

### Обработчики событий

- Обработчики клика на `customer-card` для открытия попапов.
- Обработчик клика на фон попапа для его закрытия.
- Обработчик события mouseup для закрытия попапа при клике вне его границ.
- Обработчик клика по самому попапу для закрытия.

### Позиционирование

Позиционирование попапов реализовано с помощью `JavaScript` с использованием `getBoundingClientRect` и `setProperty`, что позволяет динамически позиционировать попапы относительно карточек и размеров экрана.
