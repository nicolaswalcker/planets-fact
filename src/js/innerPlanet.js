import { setAttributes } from "./utils";
const htmlPlanetName = document.querySelector(".js-name");
const htmlInitialImage = document.querySelector(".js-image--initial");
const htmlGeologyImage = document.querySelector(".js-image--geology");
const htmlContent = document.querySelector(".js-content");
const htmlSource = document.querySelector(".js-link");
const htmlContentOptions = document.getElementsByName("info-button");
const htmlRotationTime = document.querySelector(".js-rotation");
const htmlRevolutionTime = document.querySelector(".js-revolution");
const htmlRadius = document.querySelector(".js-radius");
const htmlAverageTemp = document.querySelector(".js-temperature");
const favicon = document.querySelector(".js-favicon");

export const innerPlanet = (
  planetName,
  overviewContent,
  overviewSource,
  structureContent,
  structureSource,
  geologyContent,
  geologySource,
  planetRotation,
  planetRevolution,
  planetRadius,
  planetTemperature,
  imageInitial,
  imageInternal,
  imageGeology
) => {
  htmlPlanetName.innerHTML = planetName;
  setAttributes(htmlInitialImage, { src: imageInitial, alt: planetName });
  setAttributes(favicon, { href: imageInitial });
  htmlContent.innerHTML = overviewContent;
  htmlRotationTime.innerHTML = planetRotation;
  htmlRevolutionTime.innerHTML = planetRevolution;
  htmlRadius.innerHTML = planetRadius;
  htmlAverageTemp.innerHTML = planetTemperature;
  document.title = `${planetName} - Planetarium`;
  document.body.classList = `is-${planetName.toLowerCase()}`;
  htmlContentOptions[0].checked = true;
  htmlGeologyImage.classList.remove("image-active");
  setAttributes(htmlGeologyImage, {
    src: imageGeology,
    alt: `Geology image of ${planetName}`,
  });
  for (let i = 0; i < htmlContentOptions.length; i++) {
    htmlContentOptions[i].addEventListener("change", (event) => {
      const index = event.target.value;
      switch (index) {
        case "overview":
          htmlContent.innerHTML = overviewContent;
          setAttributes(htmlSource, { href: overviewSource, target: "_blank" });
          htmlGeologyImage.classList.remove("image-active");
          setAttributes(htmlInitialImage, {
            src: imageInitial,
            alt: `Internal image of ${planetName}`,
          });
          htmlContentOptions[i].checked = true;
          break;
        case "structure":
          htmlContent.innerHTML = structureContent;
          setAttributes(htmlSource, {
            href: structureSource,
            target: "_blank",
          });
          setAttributes(htmlInitialImage, {
            src: imageInternal,
            alt: `Internal image of ${planetName}`,
          });
          htmlGeologyImage.classList.remove("image-active");
          htmlContentOptions[i].checked = true;
          break;
        case "geology":
          setAttributes(htmlInitialImage, {
            src: imageInitial,
            alt: `Internal image of ${planetName}`,
          });
          htmlContent.innerHTML = geologyContent;
          setAttributes(htmlSource, { href: geologySource, target: "_blank" });
          htmlContentOptions[i].checked = true;
          if (htmlContentOptions[i].checked) {
            htmlGeologyImage.classList.add("image-active");
          }else{
            htmlGeologyImage.classList.remove("image-active");
          }
          break;
      }
    });
  }
};
