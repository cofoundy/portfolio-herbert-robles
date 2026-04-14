export const siteConfig = {
  name: "Dr. Herbert Cristian Robles Oncoy",
  shortName: "Dr. Herbert Robles",
  title: "Cirujano de Retina y Vítreo",
  description:
    "Médico Cirujano Oftalmólogo subespecialista en Retina y Vítreo. Más de 1,750 cirugías oculares. Fellowship en Argentina. Atención en Lima, Perú.",

  colors: {
    primaryDark: "#0C2D48",
    primary: "#1565C0",
    primaryLight: "#42A5F5",
    accent: "#0D47A1",
    surface: "#E8F0FE",
    surfaceLight: "#F0F6FF",
  },

  tagline: "Especialista en Cirugía de Retina y Vítreo",

  credentials: {
    cmp: "70451",
    rne: "41493",
  },

  stats: [
    { value: "1,750+", label: "Cirugías Oculares" },
    { value: "10+", label: "Años de Experiencia" },
    { value: "3", label: "Sociedades Internacionales" },
  ],

  expertise: [
    {
      icon: "eye",
      title: "Cirugía de Retina y Vítreo",
      description:
        "Vitrectomías, desprendimiento de retina, membrana epirretiniana, hemorragia vítrea.",
      metric: "680+",
      metricLabel: "vitrectomías realizadas",
    },
    {
      icon: "lens",
      title: "Cirugía de Catarata",
      description:
        "Facoemulsificación con implante de lente intraocular, LIO tórica, incisión pequeña.",
      metric: "1,074",
      metricLabel: "cirugías de catarata",
    },
    {
      icon: "scan",
      title: "Diagnóstico Retinal",
      description:
        "Tomografía de coherencia óptica (OCT), angiografía retinal, manejo de retinopatía del prematuro.",
      metric: "10+",
      metricLabel: "años de práctica clínica",
    },
  ],

  surgicalRecord: {
    cataracts: {
      total: 1074,
      breakdown: [
        { place: "HNERM (residentado)", count: 548 },
        { place: "HNERM (unidad retina)", count: 301 },
        { place: "Clínica Esp. Oftalmológicas", count: 166 },
        { place: "Clínica Oftalmos SAC", count: 59 },
      ],
    },
    vitrectomies: {
      total: 680,
      breakdown: [
        { place: "HNERM", count: 393 },
        { place: "Fund. Zambrano (Argentina)", count: 245 },
        { place: "Clínica Esp. Oftalmológicas", count: 47 },
        { place: "Clínica Oftalmos SAC", count: 22 },
      ],
    },
    grandTotal: 1754,
  },

  formation: [
    {
      year: "2023 - Actualidad",
      title: "Cirujano de Retina y Vítreo",
      institution: "Hospital Nacional Edgardo Rebagliati Martins",
      location: "Lima, Perú",
      type: "work",
      logo: "essalud",
      description:
        "Atención clínico-quirúrgica en la Unidad de Retina. Staff en Clínica de Especialidades Oftalmológicas y Clínica Oftalmos SAC.",
    },
    {
      year: "2022 - 2023",
      title: "Fellowship en Cirugía de Retina y Vítreo",
      institution: "Fundación Zambrano - Cirugía Ocular",
      location: "Buenos Aires, Argentina",
      type: "fellowship",
      logo: "fundacionzambrano",
      description:
        "18 meses de entrenamiento quirúrgico subespecializado. 245 vitrectomías como primer cirujano.",
    },
    {
      year: "2021",
      title: "Médico Especialista en Oftalmología",
      institution: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      location: "Lima, Perú",
      type: "education",
      logo: "unmsm",
      description:
        "RNE: 41493. Hospital Nacional Edgardo Rebagliati Martins - EsSalud.",
    },
    {
      year: "2015",
      title: "Médico Cirujano",
      institution: "Universidad César Vallejo",
      location: "Trujillo, Perú",
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
      title: "Retina on the Rocks - Cirugía Vítreo-Retinal compleja",
      venue: "XVIII Congreso Internacional SARyV",
      year: "2022",
      type: "Presentación en Panel",
      id: "",
    },
  ],

  recognitions: [
    {
      title: "Ponencia: Exudación Peridiscal",
      institution: "Consejo Argentino de Oftalmología (CAO)",
      year: "2022",
    },
    {
      title: "Ponencia: Síndrome de ojo seco",
      institution: "Centro Nacional de Telemedicina - EsSalud",
      year: "2021",
    },
    {
      title: "Carta de Felicitación por servicios extraordinarios",
      institution: "Hospital Nacional Edgardo Rebagliati Martins",
      year: "2018",
    },
  ],

  societies: [
    {
      name: "PAAO",
      fullName: "Asociación Panamericana de Oftalmología",
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
      fullName: "Sociedad Argentina de Retina y Vítreo",
      id: "",
      logo: "saryv",
    },
  ],

  locations: [
    {
      name: "Hospital Nacional Edgardo Rebagliati Martins",
      type: "Hospital - EsSalud",
      area: "Unidad de Retina",
      location: "Jesús María, Lima",
      logo: "essalud",
    },
    {
      name: "Clínica de Especialidades Oftalmológicas",
      type: "Clínica Privada",
      area: "Oftalmología - Retina",
      location: "Lima",
      logo: "",
    },
    {
      name: "Clínica Oftalmos SAC",
      type: "Clínica Privada",
      area: "Oftalmología - Retina",
      location: "Lima",
      logo: "",
    },
  ],

  cta: {
    title: "Agende su Consulta",
    description:
      "Confíe el cuidado de su visión en manos especializadas. Más de 1,750 cirugías oculares respaldan mi experiencia.",
    buttonText: "Contactar por WhatsApp",
    phone: "+51987001069",
    emailSubject: "Consulta Oftalmológica - Dr. Herbert Robles",
  },

  social: {
    email: "roblescristian78@gmail.com",
    phone: "+51987001069",
  },
};
