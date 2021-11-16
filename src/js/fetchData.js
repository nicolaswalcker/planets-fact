import renderPlanet from "./renderPlanet";
const url =
  "https://raw.githubusercontent.com/nicolaswalcker/planets-fact/main/data.json";
const planetIndex = document.getElementsByName("radio");
const fetchData = async () => {
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const planets = data;
      const initial = planets[2];
      planetIndex[2].checked = true;
      renderPlanet(initial);
      planetIndex.forEach((planet) => {
        planet.addEventListener("change", (e) => {
          const index = e.target.value;
          const planet = planets[index];
          renderPlanet(planet);
        });
      });
    })
    .catch((error) => console.log(error));
};
export default fetchData;
