document.addEventListener('DOMContentLoaded', () => {
    const weatherForm = document.getElementById('weatherForm');
    const weatherInfo = document.getElementById('weatherInfo');
  
    weatherForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      const cityInput = document.getElementById('cityInput');
      const city = cityInput.value;
  
      try {
        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();
  
        if (data.error) {
          weatherInfo.innerHTML = `<p>Error: ${data.error}</p>`;
        } else {
          const temperature = data.main.temp;
          const description = data.weather[0].description;
          weatherInfo.innerHTML = `<p>Temperature: ${temperature}°C</p><p>Description: ${description}</p>`;
        }
      } catch (error) {
        weatherInfo.innerHTML = '<p>Error fetching weather data</p>';
      }
    });
  });
  