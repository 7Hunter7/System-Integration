document.addEventListener("DOMContentLoaded", function () {
  // Инициализация переменных
  const customerCards = document.querySelectorAll(".customer-card");
  const popups = document.querySelectorAll(".popup");
  const popupContainer = document.getElementById("popupContainer");

  if (!popupContainer) {
    console.error("popupContainer not found");
    return;
  }

  let currentOpenPopup = null;

  const resetVariables = (popup) => {
    popup.style.removeProperty("--popup-top");
    popup.style.removeProperty("--popup-left");
  };

  // Функция закрытия попапов
  const closePopups = () => {
    if (currentOpenPopup) {
      const popup = document.getElementById(currentOpenPopup);
      if (popup) {
        popup.classList.remove("active");
        resetVariables(popup);
        currentOpenPopup = null;
        popupContainer.style.display = "none";
      }
    }
  };
  // Функция открытия попапов
  const openPopup = (popupId, card) => {
    closePopups();

    const popup = document.getElementById(popupId);
    if (!popup) return;
    popupContainer.style.display = "block";

    // Позиционирование попапов
    const cardRect = card.getBoundingClientRect();
    const cardTop = cardRect.top + window.scrollY;
    const cardLeft = cardRect.left + window.scrollX;
    const popupWidth = popup.offsetWidth;

    let popupLeft;
    let popupTop;

    if (window.innerWidth <= 1440) {
      popupLeft = (window.innerWidth - popupWidth) / 2;
      popupTop = cardTop;
    } else {
      const isLeftSide = card.dataset.popupSide === "left";
      popupLeft = isLeftSide
        ? cardLeft
        : cardLeft + cardRect.width - popupWidth;
      popupTop = cardTop;
    }

    // Установка стилей
    popup.style.setProperty("--popup-top", `${popupTop}px`);
    popup.style.setProperty("--popup-left", `${popupLeft}px`);
    popup.classList.add("active");
    currentOpenPopup = popupId;
  };

  // Обработчики событий
  customerCards.forEach((card) => {
    card.addEventListener("click", (e) => {
      const popupId = card.getAttribute("data-popup");
      openPopup(popupId, card);
    });
  });

  // Закрытие по клику вне попапа
  popupContainer.addEventListener("click", (e) => {
    if (e.target === popupContainer) {
      closePopups();
    }
  });

  document.addEventListener("mouseup", (e) => {
    if (currentOpenPopup) {
      const popup = document.getElementById(currentOpenPopup);
      if (popup && !popup.contains(e.target)) {
        // Проверка на клик вне попапа
        closePopups();
      }
    }
  });

  popups.forEach((popup) => {
    popup.addEventListener("click", (e) => {
      e.stopPropagation(); // Предотвращает распространение события клика за пределы элемента попапа
      closePopups();
    });
  });
});
