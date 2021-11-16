import { innerPlanet } from "./innerPlanet";
export const radioGroup = document.getElementsByName("info-button");
const renderPlanet = (planet) => {
  const {
    name: planetName,
    overview: { content: overviewContent, source: overviewSource },
    structure: { content: structureContent, source: structureSource },
    geology: { content: geologyContent, source: geologySource },
    rotation: planetRotation,
    revolution: planetRevolution,
    radius: planetRadius,
    temperature: planetTemperature,
    images: {
      planet: planetImage,
      internal: internalImage,
      geology: geologylImage,
    },
  } = planet;
  innerPlanet(planetName, overviewContent, overviewSource, structureContent, structureSource, geologyContent, geologySource, planetRotation, planetRevolution, planetRadius, planetTemperature, planetImage, internalImage, geologylImage);
};

export default renderPlanet;
