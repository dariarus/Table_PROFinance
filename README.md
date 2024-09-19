## ФИН Контроль: таблица с данными по остаткам

_Описание и функциональность_: Тестовое задание для вакансии. Демнострация навыков верстки и создания бизнес-логики согласно ТЗ.

Техническое задание: https://disk.yandex.ru/d/7CsI573YK0Jb8w

Реализован основной функционал:
- при нажатии на кнопку "Загрузить из csv" в таблицу подгружаются произвольные данные из предоставленного json-файла; имитируется загрузка данных с сервера. Данные распределяются по колонкам "Баркод", "Бренд", "Наименование", "Количество" и "Цена". В конце таблицы есть итоговая строка с общим количеством наименований, суммарным количеством единиц товара и суммарной стоимостью;
- при нажатии кнопки "Экспорт" данные таблицы сохраняются на компьютере пользователя в формате json с указанием даты и времени скачивания в названии файла. Отфильтрованные данные также можно выгрузить;
- реализована возможность изенения данных таблицы в ячейках колонок "Количество" и "Цена" по двойному щелчку мыши;
- суммарные значения в итоговой строке пересчитываются при изменении данных;
- настроена валидация полей ввода в ячейках колонок "Количество" и "Цена" с проверкой введенных данных на соответствие числовому формату.

Реализован функционал из дополнительных заданий:
- настроена фильтрация данных таблицы по колонкам "Баркод", "Бренд" и "Наименование" при нажатии кнопки "Сформировать";
- настроена сортировка данных во всех колонках по нажатию стрелочек справа от их названий.

Реализован функционал, не упомянутый в ТЗ:
- очистка всех фильтров;
- раскрытие календаря в шапке по нажатию кнопки "Тариф до ДД-ММ-ГГГГ"

_Используемые технологии_: React, TSX, UI библиотека Ant Design, npm, flexbox, TypeScript, Vite

_Инструкция по запуску приложения_:

#### - Node.js: v20.11.1

#### - npm: v10.2.4

1). Клонировать репозиторий :

```
git clone git@github.com:dariarus/Table_PROFinance.git
```

2). Перейти в папку с проектом:

```shell
cd table_pro-finance
```

3). Запустить приложение в режиме разработки:

```shell
npm install
npm run dev
```

4). Открыть приложение в браузере по адресу:
http://localhost:5173/

_Что можно улучшить:_
- покрыть приложение тестами;
- доработать верстку и сделать страницу еще более приближенной к предоставленному в ТЗ примерному скриншоту;
- добавить недостающий функционал на кнопки и ссылки, не описанные в ТЗ
- установить и настроить стейт-менеджер Redux Toolkit или MobX*

\* Однако автор данного проекта считает, что для такого маленького приложения стейт-менеджер окажется лишней нагрузкой и его применение здесь нецелесообразно

*Ссылка на приложение на GitHub Pages*: [Таблица PRO Финанс](https://dariarus.github.io/Table_PROFinance/)

