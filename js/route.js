const defaultLocation = '#/weather?lat=37.55543&lon=126.9199'; //어메이징 농카이 위치

window.navigator.geolocation.getCurrentPosition((position) => {
  const { latitude, longitude } = position.coords;

  console.log(latitude, longitude);
});
