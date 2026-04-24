export const siteConfig = {
  name: "Dr. Cristian Robles",
  shortName: "Dr. Cristian Robles",
  title: "Cirujano de Catarata, Retina y Mácula",
  description:
    "Médico Cirujano Oftalmólogo especialista en Cirugía de Catarata, Retina y Mácula. Más de 2,500 cirugías oculares. Fellowship en Argentina. Atención en Lima, Perú.",

  colors: {
    primaryDark: "#0C2D48",
    primary: "#1565C0",
    primaryLight: "#42A5F5",
    accent: "#0D47A1",
    surface: "#E8F0FE",
    surfaceLight: "#F0F6FF",
  },

  tagline: "Especialista en Cirugía de Catarata, Retina y Mácula",

  credentials: {
    cmp: "70451",
    rne: "41493",
  },

  stats: [
    { value: "2,500+", label: "Cirugías Oculares" },
    { value: "10+", label: "Años de Experiencia" },
    { value: "3", label: "Sociedades Internacionales" },
  ],

  expertise: [
    {
      icon: "eye",
      title: "Cirugía de Retina y Vítreo",
      description:
        "Vitrectomías, desprendimiento de retina, membrana epirretiniana, hemorragia vítrea.",
      metric: "1000+",
      metricLabel: "vitrectomías realizadas",
    },
    {
      icon: "lens",
      title: "Cirugía de Catarata",
      description:
        "Facoemulsificación con implante de lente intraocular, LIO tórica, incisión pequeña.",
      metric: "1500+",
      metricLabel: "cirugías de catarata",
    },
    {
      icon: "scan",
      title: "Retina Clínica",
      description:
        "Degeneración macular, miopía degenerativa, oclusiones vasculares, tomografía de coherencia óptica (OCT) y angiografía retiniana.",
      metric: "10+",
      metricLabel: "años de práctica clínica",
    },
  ],

  surgicalRecord: {
    cataracts: {
      total: 1500,
      breakdown: [
        { label: "Cataratas seniles" },
        { label: "Cataratas complicadas" },
        { label: "Catarata y miopía" },
        { label: "Catarata e hipermetropía" },
        { label: "Catarata y astigmatismo" },
      ],
    },
    vitrectomies: {
      total: 1000,
      breakdown: [
        { label: "Desprendimiento de retina" },
        { label: "Membrana epirretiniana" },
        { label: "Hemorragia vítrea" },
        { label: "Agujero macular" },
      ],
    },
    grandTotal: 2500,
  },

  formation: [
    {
      year: "2023 - Actualidad",
      title: "Cirujano de Retina y Vítreo",
      institution: "Hospital Nacional Edgardo Rebagliati Martins",
      location: "Lima, Perú",
      type: "work",
      logo: "essalud",
      description: "Atención clínico-quirúrgica en la Unidad de Retina.",
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
      "Confíe el cuidado de su visión en manos especializadas. Más de 2,500 cirugías oculares respaldan mi experiencia.",
    buttonText: "Contactar por WhatsApp",
    phone: "+51944759657",
    emailSubject: "Consulta Oftalmológica - Dr. Cristian Robles",
  },

  social: {
    email: "roblescristian78@gmail.com",
    phone: "+51944759657",
  },
};
