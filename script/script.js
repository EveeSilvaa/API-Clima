const apiKey = '986c50b7c3050be72a57d2a87238bde9'; // Substitua por sua chave da OpenWeatherMap API
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

document.getElementById('location-form').addEventListener('submit', async (e) => {
  e.preventDefault();

  const location = document.getElementById('location-input').value;
  const weatherResult = document.getElementById('weather-result');

  try {
    const response = await fetch(`${apiUrl}?q=${location}&units=metric&appid=${apiKey}`);
    if (!response.ok) throw new Error('City not found');
    
    const data = await response.json();
    const { main, name, weather } = data;

    weatherResult.innerHTML = `
      <h2>Weather in ${name}</h2>
      <p>Temperature: ${main.temp}°C</p>
      <p>Condition: ${weather[0].description}</p>
      <p>Humidity: ${main.humidity}%</p>
    `;
  } catch (error) {
    weatherResult.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
  }
});