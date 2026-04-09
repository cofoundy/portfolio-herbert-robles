export const siteConfig = {
  name: "Dr. Herbert Cristian Robles Oncoy",
  shortName: "Dr. Herbert Robles",
  title: "Cirujano de Retina y Vitreo",
  description:
    "Medico Cirujano Oftalmologo subespecialista en Retina y Vitreo. Mas de 1,750 cirugias oculares. Fellowship en Argentina. Atencion en Lima, Peru.",

  colors: {
    primaryDark: "#0C2D48",
    primary: "#1565C0",
    primaryLight: "#42A5F5",
    accent: "#0D47A1",
    surface: "#E8F0FE",
    surfaceLight: "#F0F6FF",
  },

  tagline: "Especialista en Cirugia de Retina y Vitreo",

  credentials: {
    cmp: "70451",
    rne: "41493",
  },

  stats: [
    { value: "1,750+", label: "Cirugias Oculares" },
    { value: "10+", label: "Anos de Experiencia" },
    { value: "3", label: "Sociedades Internacionales" },
  ],

  expertise: [
    {
      icon: "eye",
      title: "Cirugia de Retina y Vitreo",
      description:
        "Vitrectomias, desprendimiento de retina, membrana epirretiniana, hemorragia vitrea.",
      metric: "680+",
      metricLabel: "vitrectomias realizadas",
    },
    {
      icon: "lens",
      title: "Cirugia de Catarata",
      description:
        "Facoemulsificacion con implante de lente intraocular, LIO torica, incision pequena.",
      metric: "1,074",
      metricLabel: "cirugias de catarata",
    },
    {
      icon: "scan",
      title: "Diagnostico Retinal",
      description:
        "Tomografia de coherencia optica (OCT), angiografia retinal, manejo de retinopatia del prematuro.",
      metric: "10+",
      metricLabel: "anos de practica clinica",
    },
  ],

  surgicalRecord: {
    cataracts: {
      total: 1074,
      breakdown: [
        { place: "HNERM (residentado)", count: 548 },
        { place: "HNERM (unidad retina)", count: 301 },
        { place: "Clinica Esp. Oftalmologicas", count: 166 },
        { place: "Clinica Oftalmos SAC", count: 59 },
      ],
    },
    vitrectomies: {
      total: 680,
      breakdown: [
        { place: "HNERM", count: 393 },
        { place: "Fund. Zambrano (Argentina)", count: 245 },
        { place: "Clinica Esp. Oftalmologicas", count: 47 },
        { place: "Clinica Oftalmos SAC", count: 22 },
      ],
    },
    grandTotal: 1754,
  },

  formation: [
    {
      year: "2023 - Actualidad",
      title: "Cirujano de Retina y Vitreo",
      institution: "Hospital Nacional Edgardo Rebagliati Martins",
      location: "Lima, Peru",
      type: "work",
      logo: "essalud",
      description:
        "Atencion clinico-quirurgica en la Unidad de Retina. Staff en Clinica de Especialidades Oftalmologicas y Clinica Oftalmos SAC.",
    },
    {
      year: "2022 - 2023",
      title: "Fellowship en Cirugia de Retina y Vitreo",
      institution: "Fundacion Zambrano - Cirugia Ocular",
      location: "Buenos Aires, Argentina",
      type: "fellowship",
      logo: "fundacionzambrano",
      description:
        "18 meses de entrenamiento quirurgico subespecializado. 245 vitrectomias como primer cirujano.",
    },
    {
      year: "2021",
      title: "Medico Especialista en Oftalmologia",
      institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      location: "Lima, Peru",
      type: "education",
      logo: "unmsm",
      description:
        "RNE: 41493. Hospital Nacional Edgardo Rebagliati Martins - EsSalud.",
    },
    {
      year: "2015",
      title: "Medico Cirujano",
      institution: "Universidad Cesar Vallejo",
      location: "Trujillo, Peru",
      type: "education",
      logo: "ucv",
      description:
        "CMP: 70451. SERUMS en Sanidad PNP Huamachuco - 2do puesto regional.",
    },
  ],

  research: [
    {
      title: "Epidemiology of Retinopathy of Prematurity",
      venue: "World Ophthalmology Congress (WOC)",
      year: "2020",
      type: "E-Poster",
      id: "495-PO",
    },
    {
      title: "Retinopathy Of Prematurity Information System (ROPIS)",
      venue: "ARVO - Association for Research in Vision and Ophthalmology",
      year: "2020",
      type: "Poster + Video",
      id: "4605 - B0411",
    },
    {
      title: "Retina on the Rocks - Cirugia Vitreo-Retinal compleja",
      venue: "XVIII Congreso Internacional SARyV",
      year: "2022",
      type: "Presentacion en Panel",
      id: "",
    },
  ],

  recognitions: [
    {
      title: "Ponencia: Exudacion Peridiscal",
      institution: "Consejo Argentino de Oftalmologia (CAO)",
      year: "2022",
    },
    {
      title: "Ponencia: Sindrome de ojo seco",
      institution: "Centro Nacional de Telemedicina - EsSalud",
      year: "2021",
    },
    {
      title: "Carta de Felicitacion por servicios extraordinarios",
      institution: "Hospital Nacional Edgardo Rebagliati Martins",
      year: "2018",
    },
  ],

  societies: [
    {
      name: "PAAO",
      fullName: "Asociacion Panamericana de Oftalmologia",
      id: "68424",
      logo: "paao",
    },
    {
      name: "EURETINA",
      fullName: "European Society of Retina Specialists",
      id: "4447",
      logo: "euretina",
    },
    {
      name: "SARyV",
      fullName: "Sociedad Argentina de Retina y Vitreo",
      id: "",
      logo: "saryv",
    },
  ],

  locations: [
    {
      name: "Hospital Nacional Edgardo Rebagliati Martins",
      type: "Hospital - EsSalud",
      area: "Unidad de Retina",
      location: "Jesus Maria, Lima",
      logo: "essalud",
    },
    {
      name: "Clinica de Especialidades Oftalmologicas",
      type: "Clinica Privada",
      area: "Oftalmologia - Retina",
      location: "Lima",
      logo: "",
    },
    {
      name: "Clinica Oftalmos SAC",
      type: "Clinica Privada",
      area: "Oftalmologia - Retina",
      location: "Lima",
      logo: "",
    },
  ],

  cta: {
    title: "Agende su Consulta",
    description:
      "Confie el cuidado de su vision en manos especializadas. Mas de 1,750 cirugias oculares respaldan mi experiencia.",
    buttonText: "Contactar por WhatsApp",
    phone: "+51987001069",
    emailSubject: "Consulta Oftalmologica - Dr. Herbert Robles",
  },

  social: {
    email: "roblescristian78@gmail.com",
    phone: "+51987001069",
  },
};
