import { createRef } from "react"
import { Vector3 } from "three"

const state = {
  sections: 9,
  pages: 8,
  zoom: 75,
  paragraphs: [
    {
      offset: 1,
      factor: 1.75,
      header: "Oliven",
      image: "/Oliven.jpg",
      aspect: 1.6,
      text: "Oliven is a genuine, supportive, safe, and respectful community for young adults facing homelessness. It is a transitional housing program that aims to guide and support residents to secure long-term stable employment and housing."
    },
    {
      offset: 2,
      factor: 2.0,
      header: "Needit",
      image: "/Needit.jpg",
      aspect: 1.6,
      text:
        "Needit is a second-hand items trading platform that aims to provide quick, easy and trustworthy trading experiences for student community."
    },
    {
      offset: 3,
      factor: 2.25,
      header: "BLM Library",
      image: "/BLM.jpeg",
      aspect: 1.7,
      text:
        "In memory of the tragic historic moment, this BLM Library website serves as an archive of #blm movement as well as the information dictionary to support the movement. #Webflow"
    },
    {
      offset: 4,
      factor: 2.0,
      header: "bondi",
      image: "/bondi.jpeg",
      aspect: 1.75,
      text:
        "Bondi is a set of an interactive wooden toy that is designed to solve communication problems between parents and grown-up child."
    },
    {
      offset: 5,
      factor: 1.75,
      header: "Insider",
      image: "/Insider.jpg",
      aspect: 1.55,
      text:
        "Insider is a mobile App designed to improve ArtCenter's orientation experience. It achieves the goal by getting every student's questions answered efficiently & comprehensively. #App"
    }
  ],
  stripes: [
    { offset: 0, color: "#000", height: 13 },
    { offset: 6.3, color: "#000", height: 20 }
  ],
  diamonds: [
    { x: 0, offset: 0.15, pos: new Vector3(), scale: 0.6, factor: 1.8 },
    { x: 2, offset: 1.1, pos: new Vector3(), scale: 0.8, factor: 2.1 },
    { x: -5, offset: 2, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 0, offset: 3.2, pos: new Vector3(), scale: 0.8, factor: 1.75 },
    { x: 0, offset: 4, pos: new Vector3(), scale: 0.8, factor: 2.5 },
    { x: 2, offset: 5.5, pos: new Vector3(), scale: 1.25, factor: 0.85 },
    { x: -5, offset: 7, pos: new Vector3(), scale: 0.8, factor: 2 },
    { x: 0, offset: 8, pos: new Vector3(), scale: 1.5, factor: 6 }
  ],
  top: createRef()
}

export default state
