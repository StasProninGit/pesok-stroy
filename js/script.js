// map


function init() {
  var map = new ymaps.Map("map", {
    center: [55.76, 37.64],
    zoom: 8
  });

  let placemark = new ymaps.Placemark([55.65997652358045,36.74867991406251], {}, {
    iconLayout: 'default#image',
    iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9218/9218033.png',
    iconImageSize: [30, 30],
    iconImageOffset: [0, 0]

  });

  // let placemark = new ymaps.Placemark([55.41906756739088,37.580891815718296], {}, {
  //   iconLayout: 'default#image',
  //   iconImageHref: 'https://cdn-icons-png.flaticon.com/512/9218/9218033.png',
  //   iconImageSize: [30, 30],
  //   iconImageOffset: [0, 0]

  map.controls.remove('geolocationControl'); // удаляем геолокацию
  map.controls.remove('searchControl'); // удаляем поиск
  map.controls.remove('trafficControl'); // удаляем контроль трафика
  map.controls.remove('typeSelector'); // удаляем тип
  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
  // map.controls.remove('zoomControl'); // удаляем контрол зуммирования
  map.controls.remove('rulerControl'); // удаляем контрол правил
  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)

  map.geoObjects.add(placemark);
}

ymaps.ready(init);
