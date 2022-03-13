// создаем функцию которая возвращает те элементы массива values, которые являются типом type
const filterByType = (type, ...values) => values.filter(value => typeof value === type),
// создаем функцию которая прячет все блоки ответа
	hideAllResponseBlocks = () => {
    // создаем массив из блоков ответа
		const responseBlocksArray = Array.from(document.querySelectorAll('div.dialog__response-block'));
    // к каждому элементу массива блоков ответов присваиваем значение display равное none, тем самым скрывая их
		responseBlocksArray.forEach(block => block.style.display = 'none');
	},
  // создаем функцию которая показывает определенный блок ответа blockSelector, 
  // и при необходимости присваевает спану spanSelector текстовое значение msgText
	showResponseBlock = (blockSelector, msgText, spanSelector) => {
    // прячем все блоки
		hideAllResponseBlocks();
    // необходимому блоку присваеваем display значение block, тем самым отображая его на странице
		document.querySelector(blockSelector).style.display = 'block';
    // проверка введен ли spanSelector
		if (spanSelector) {
      // присваивание спану spanSelector текстовое значение msgText
			document.querySelector(spanSelector).textContent = msgText;
		}
	},
  // создаем функцию которая отображает блок с ошибкой и текстом msgText
	showError = msgText => showResponseBlock('.dialog__response-block_error', msgText, '#error'),
  // создаем функцию которая отображает блок с полученным результатом и текстом msgText
	showResults = msgText => showResponseBlock('.dialog__response-block_ok', msgText, '#ok'),
  // создаем функцию которая отображает блок без результата
	showNoResults = () => showResponseBlock('.dialog__response-block_no-results'),
  // создаем функцию которая профильтрует values по типу type и выведет результат пользователю
	tryFilterByType = (type, values) => {
    // попытка фильтрации
		try {
      // про помощи метода eval через строку создаем js код который проведет фильтрацию методом filterByType
      // с переданными type и values и выполняем его
      // после объединяем вернувшийся списко значений в строку через запятую
			const valuesArray = eval(`filterByType('${type}', ${values})`).join(", ");
      // через тернарный оператор задаем значение сообщению, в зависимости от длинны полученого ранее массива
			const alertMsg = (valuesArray.length) ?
        // если длинна не 0, то сообщение будет следующим
				`Данные с типом ${type}: ${valuesArray}` :
        // если длинна 0, сообщение будет следующим
				`Отсутствуют данные типа ${type}`;
      // вызываем метод, который отобразит блок с полученным сообщением
			showResults(alertMsg);
    // в случае ошибки отлавливаем ее
		} catch (e) {
      // вызываем метод, который отобразит блок с полученным сообщением
			showError(`Ошибка: ${e}`);
		}
	};
// создаем константу, хранящую кнопку фильтрации
const filterButton = document.querySelector('#filter-btn');
// на кнопку фильтрации навешиваем слушатель события по методу click
filterButton.addEventListener('click', e => {
  // создаем константы, хранящие инпуты со следующими id
	const typeInput = document.querySelector('#type');
	const dataInput = document.querySelector('#data');
  // проверка на пустую строку в инпуте, с введеным пользователем значением
	if (dataInput.value === '') {
    // в случае пустой строки
    // отображение пользователю ошибки
		dataInput.setCustomValidity('Поле не должно быть пустым!');
    // показ блока без результата 
		showNoResults();
	} else {
    // в случае не пустой строки
    // скрытие от пользователя сообщения об ошибке
		dataInput.setCustomValidity('');
    // отмена обычного поведения события
		e.preventDefault();
    // вызов функции фильтрации значений из dataInput по типу из typeInput
		tryFilterByType(typeInput.value.trim(), dataInput.value.trim());
	}
});

