'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

navigator.geolocation.getCurrentPosition(
  function (position) {
    const { latitude, longitude } = position.coords;

    const map = L.map('map').setView([latitude, longitude], 16);

    L.tileLayer('https://tile.openstreetmap.bzh/ca/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles courtesy of <a href="https://www.openstreetmap.cat" target="_blank">Breton OpenStreetMap Team</a>',
    }).addTo(map);

    L.marker([latitude, longitude])
      .addTo(map)
      .bindPopup('Bad Bitch House.')
      .openPopup();

    map.on('click', function (mapEvent) {
      const { latlng } = mapEvent;

      L.marker(latlng)
        .addTo(map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            content: 'My Op House',
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .openPopup();
    });
  },
  function () {
    alert('could not get your position');
  }
);
