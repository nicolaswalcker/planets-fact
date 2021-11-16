import { setAttributes } from "./utils";
const htmlPlanetName = document.querySelector(".js-name");
const htmlInitialImage = document.querySelector(".js-image--initial");
const htmlInternalImage = document.querySelector(".js-image--internal");
const htmlGeologyImage = document.querySelector(".js-image--geology");
const htmlContent = document.querySelector(".js-content");
const htmlSource = document.querySelector(".js-link");
const htmlContentOptions = document.getElementsByName("info-button");
const htmlRotationTime = document.querySelector(".js-rotation");
const htmlRevolutionTime = document.querySelector(".js-revolution");
const htmlRadius = document.querySelector(".js-radius");
const htmlAverageTemp = document.querySelector(".js-temperature");

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
  setAttributes(htmlInitialImage, { src: `${imageInitial}`, alt: planetName });
  htmlContent.innerHTML = overviewContent;
  htmlRotationTime.innerHTML = planetRotation;
  htmlRevolutionTime.innerHTML = planetRevolution;
  htmlRadius.innerHTML = planetRadius;
  htmlAverageTemp.innerHTML = planetTemperature;

  htmlContentOptions[0].checked = true;
  for (let i = 0; i < htmlContentOptions.length; i++) {
    htmlContentOptions[i].addEventListener("change", (event) => {
      const index = event.target.value;
      switch (index) {
        case "overview":
          htmlContent.innerHTML = overviewContent;
          setAttributes(htmlSource, { href: overviewSource, target: "_blank" });

          imageGeology.classList.remove("image-active");
          imageInternal.classList.remove("image-active");
          htmlContentOptions[i].checked = true;

          break;
        case "structure":
          htmlContent.innerHTML = structureContent;
          setAttributes(htmlSource, { href: structureSource, target: "_blank" });
          /* imageGeology.classList.remove("image-active");
          imageInternal.classList.add("image-active"); */
          htmlContentOptions[i].checked = true;
          break;
        case "geology":
          htmlContent.innerHTML = geologyContent;
          setAttributes(htmlSource, { href: geologySource, target: "_blank" });
          imageGeology.classList.add("image-active");
          imageInternal.classList.remove("image-active");
          htmlContentOptions[i].checked = true;
          break;
      }
    });
  }
};
