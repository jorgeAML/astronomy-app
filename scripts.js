fetch('https://api.nasa.gov/planetary/apod?api_key=mGF2HwXeB42ahOBgZOYYCSWRrSGRivjk8mfLyWlA')
  .then(response => response.json())
  .then(data => {
        const app = document.getElementById('root');

      const container = document.createElement('h3');
      container.setAttribute('class', 'container');
      container.textContent = `${data.title}`;
      app.append(container);

      const image = document.createElement('img');
      image.setAttribute('class', 'apodImg');
      image.src = `${data.hdurl}`;
      app.append(image);
      
      console.log(data)
    });
