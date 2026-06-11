export type MenuCategory =
  | "Desayunos"
  | "Wraps"
  | "Ensaladas"
  | "Sándwiches"
  | "Tacos y especiales"
  | "Aguas y refrescos"
  | "Bebidas calientes"
  | "Bebidas frías"
  | "Frappés"
  | "Smoothies";
// | "Extras";

export type MenuItem = {
  id: number;
  category: MenuCategory;
  name: string;
  description?: string;
  price: number;
  image?: string;
  isRecommended?: boolean;
  isFavorite?: boolean;
  isNew?: boolean;
  extraGroup?: "food" | "drink";
};

export type MenuExtra = {
  id: number;
  group: "food" | "drink";
  name: string;
  price: number;
};

export const menuCategories: MenuCategory[] = [
  "Desayunos",
  "Wraps",
  "Ensaladas",
  "Sándwiches",
  "Tacos y especiales",
  "Aguas y refrescos",
  "Bebidas calientes",
  "Bebidas frías",
  "Frappés",
  "Smoothies",
  // "Extras",
];

export const menuItems: MenuItem[] = [
  // DESAYUNOS
  {
    id: 1,
    category: "Desayunos",
    name: "Avocado Toast",
    description: "Pan tostado con guacamole servido con pico de gallo.",
    price: 120,
    extraGroup: "food",
    image: "/images/menu/avocado-toast.png",
  },
  {
    id: 2,
    category: "Desayunos",
    name: "Enchiladas suizas",
    description:
      "Bañadas en salsa verde o roja, media crema, queso gratinado, cebolla y cilantro.",
    price: 140,
    extraGroup: "food",
    isFavorite: true,
    image: "/images/menu/enchiladas-suizas.png",
  },
  {
    id: 3,
    category: "Desayunos",
    name: "Enchiladas suizas Olivo",
    description: "Bañadas en crema poblana, queso gratinado, elote y cilantro.",
    price: 145,
    extraGroup: "food",
    isNew: true,
    image: "/images/menu/enchiladas-suizas-olivo.png",
  },
  {
    id: 4,
    category: "Desayunos",
    name: "Chilaquiles",
    description:
      "Totopos sobre un espejo de frijoles con chipotle, bañados con salsa verde o roja, crema, queso, aguacate, cebolla y cilantro.",
    price: 120,
    extraGroup: "food",
    isFavorite: true,
    image: "/images/menu/chilaquiles.png",
  },
  {
    id: 5,
    category: "Desayunos",
    name: "Chilaquiles Olivo",
    description:
      "Totopos sobre un espejo de frijoles con chipotle, bañados con salsa roja asada, longaniza, trocitos de plátano, crema, queso, aguacate, cebolla y cilantro, coronado con un huevo estrellado.",
    price: 155,
    extraGroup: "food",
    isNew: true,
    image: "/images/menu/chilaquiles-olivo.png",
  },
  {
    id: 6,
    category: "Desayunos",
    name: "Huevos al gusto",
    description:
      "Jamón, tocino, a la mexicana o espinacas. Acompañados con frijoles, pan tostado o tortillas.",
    price: 130,
    extraGroup: "food",
  },
  {
    id: 7,
    category: "Desayunos",
    name: "Huevos rancheros",
    description:
      "Huevos estrellados sobre tortillas doradas con frijoles, bañados en salsa roja o verde, jamón picado, crema, queso y aguacate.",
    price: 140,
    extraGroup: "food",
    image: "/images/menu/huevos-rancheros.png",
  },
  {
    id: 8,
    category: "Desayunos",
    name: "Huevos al albañil",
    description:
      "Huevos revueltos con cecina, bañados en salsa verde, servidos con tortillas, frijoles y aguacate.",
    price: 160,
    extraGroup: "food",
    isRecommended: true,
    image: "/images/menu/huevos-al-albanil.png",
  },
  {
    id: 9,
    category: "Desayunos",
    name: "Molletes",
    description:
      "Pan brioche con frijoles y queso gratinado. Servidos con pico de gallo y aderezo de chipotle.",
    price: 120,
    extraGroup: "food",
    isRecommended: true,
    image: "/images/menu/molletes-con-cecina.png",
  },
  {
    id: 10,
    category: "Desayunos",
    name: "Pan francés",
    description: "Servido con fresas y miel maple.",
    price: 135,
    extraGroup: "food",
    image: "/images/menu/pan-frances-maple-fresa.png",
  },

  // WRAPS
  {
    id: 11,
    category: "Wraps",
    name: "Pechuga a la plancha",
    description:
      "Base de lechuga, tomate, cebolla, aguacate y germinado; acompañado de papas y aderezo.",
    price: 130,
    extraGroup: "food",
  },
  {
    id: 12,
    category: "Wraps",
    name: "Jamón de pavo",
    description:
      "Base de lechuga, tomate, cebolla, aguacate y germinado; acompañado de papas y aderezo.",
    price: 125,
    extraGroup: "food",
  },
  {
    id: 13,
    category: "Wraps",
    name: "Cecina",
    description:
      "Base de lechuga, tomate, cebolla, aguacate y germinado; acompañado de papas y aderezo.",
    price: 150,
    extraGroup: "food",
  },
  {
    id: 14,
    category: "Wraps",
    name: "Pollo pastor",
    description:
      "Base de lechuga, tomate, cebolla, aguacate y germinado; acompañado de papas y aderezo.",
    price: 135,
    extraGroup: "food",
    isFavorite: true,
  },

  // ENSALADAS
  {
    id: 15,
    category: "Ensaladas",
    name: "Ensalada César",
    description:
      "Lechuga, 150gr pechuga a la plancha, crutones, queso parmesano y aderezo César.",
    price: 130,
    extraGroup: "food",
    image: "/images/menu/ensalada-cesar.png",
  },
  {
    id: 16,
    category: "Ensaladas",
    name: "Ensalada Olivo",
    description:
      "Lechuga, 150gr pechuga a la plancha, queso panela, tocino, crutones y aderezo mostaza miel.",
    price: 135,
    extraGroup: "food",
    isRecommended: true,
    image: "/images/menu/ensalada-olivo.png",
  },
  {
    id: 17,
    category: "Ensaladas",
    name: "Ensalada balsámica",
    description:
      "Lechuga, espinacas, 150gr pechuga a la plancha, fresas, aguacate, almendras y vinagreta balsámica.",
    price: 140,
    extraGroup: "food",
    isFavorite: true,
    image: "/images/menu/ensalada-balsamica.png",
  },
  {
    id: 18,
    category: "Ensaladas",
    name: "Ensalada mediterránea",
    description:
      "Lechuga, espinacas, 150gr pechuga a la plancha, manzana verde, nueces, arándanos y aderezo mostaza dulce.",
    price: 140,
    extraGroup: "food",
  },

  // SÁNDWICHES
  {
    id: 19,
    category: "Sándwiches",
    name: "Sándwich montecristo",
    description:
      "Sándwich salado dulce con jamón y queso mozzarella, espolvoreado con azúcar glass y servido con mermelada de fresa y fresas naturales.",
    price: 145,
    extraGroup: "food",
    image: "/images/menu/sandwich-montecristo.png",
  },
  {
    id: 20,
    category: "Sándwiches",
    name: "Croque madame",
    description:
      "Sándwich de jamón y queso, bañados en una salsa de queso y coronado con un huevo estrellado; acompañado de ensalada.",
    price: 145,
    extraGroup: "food",
  },
  {
    id: 21,
    category: "Sándwiches",
    name: "Sándwich de queso",
    description:
      "Sándwich tostado con queso Philadelphia, queso mozzarella y jamón; servido con papitas y aderezo.",
    price: 145,
    extraGroup: "food",
    isFavorite: true,
  },
  {
    id: 22,
    category: "Sándwiches",
    name: "Sándwich de huevo con tocino",
    description:
      "Sándwich con 2 huevos revueltos con tocino, servido con queso mozzarella y aguacate; servido con papitas y aderezo.",
    price: 140,
    extraGroup: "food",
    isRecommended: true,
  },
  {
    id: 23,
    category: "Sándwiches",
    name: "Sándwich clásico",
    description:
      "Sándwich a base de lechuga, tomate, cebolla, aguacate, germinado; acompañado de papitas y aderezo.",
    price: 140,
    extraGroup: "food",
    image: "/images/menu/sandwich-clasico-pollo.png",
  },

  // TACOS Y ESPECIALES
  {
    id: 24,
    category: "Tacos y especiales",
    name: "Tacos de cecina",
    description:
      "5 tacos servidos con guacamole, cebolla asada y acompañado de pico de gallo y aderezo de ajo.",
    price: 195,
    extraGroup: "food",
    isFavorite: true,
  },
  {
    id: 25,
    category: "Tacos y especiales",
    name: "Tacos de pastor",
    description:
      "5 tacos de pollo pastor, servidos con piña asada y acompañado de cebolla con cilantro y aderezo de ajo.",
    price: 145,
    extraGroup: "food",
    isRecommended: true,
    image: "/images/menu/tacos-pastor.png",
  },
  {
    id: 26,
    category: "Tacos y especiales",
    name: "Tacos de alambre de pollo",
    description:
      "5 tacos de pollo con alambre gratinado y servidos con pico de gallo y aderezo de ajo.",
    price: 160,
    extraGroup: "food",
    isNew: true,
  },
  {
    id: 27,
    category: "Tacos y especiales",
    name: "Volcanes de cecina",
    description:
      "150gr de cecina sobre tortillas doradas gratinadas con queso y coronadas con aguacate; servido con pico de gallo y aderezo de ajo.",
    price: 160,
    extraGroup: "food",
    isFavorite: true,
    image: "/images/menu/volcanes-cecina.png",
  },
  {
    id: 28,
    category: "Tacos y especiales",
    name: "Volcanes de longaniza",
    description:
      "Tortillas doradas y gratinadas con queso, servidas con aguacate, pico de gallo y aderezo de ajo.",
    price: 145,
    extraGroup: "food",
    isNew: true,
    image: "/images/menu/volcanes-longaniza.png",
  },
  {
    id: 29,
    category: "Tacos y especiales",
    name: "Cecina con chilaquiles, frijoles y aguacate",
    price: 250,
    extraGroup: "food",
    isNew: true,
    image: "/images/menu/cecina-con-chilaquiles.png",
  },
  {
    id: 30,
    category: "Tacos y especiales",
    name: "Pollo a la plancha con ensalada y aguacate",
    price: 190,
    extraGroup: "food",
    isNew: true,
    image: "/images/menu/pollo-a-la-plancha.png",
  },

  // AGUAS Y REFRESCOS
  {
    id: 31,
    category: "Aguas y refrescos",
    name: "Jamaica",
    price: 35,
    extraGroup: "drink",
  },
  {
    id: 32,
    category: "Aguas y refrescos",
    name: "Jamaica fresa",
    price: 40,
    extraGroup: "drink",
  },
  {
    id: 33,
    category: "Aguas y refrescos",
    name: "Limonada",
    price: 35,
    extraGroup: "drink",
  },
  {
    id: 34,
    category: "Aguas y refrescos",
    name: "Limonada fresa",
    price: 40,
    extraGroup: "drink",
  },
  {
    id: 35,
    category: "Aguas y refrescos",
    name: "Jamaica piña",
    price: 40,
    extraGroup: "drink",
  },
  {
    id: 36,
    category: "Aguas y refrescos",
    name: "Maracuyá",
    price: 35,
    extraGroup: "drink",
  },
  {
    id: 37,
    category: "Aguas y refrescos",
    name: "Horchata",
    price: 35,
    extraGroup: "drink",
  },
  {
    id: 38,
    category: "Aguas y refrescos",
    name: "Polvillo",
    price: 35,
    extraGroup: "drink",
  },
  {
    id: 39,
    category: "Aguas y refrescos",
    name: "Coca-Cola 600ml",
    price: 35,
  },
  {
    id: 40,
    category: "Aguas y refrescos",
    name: "Agua selva",
    price: 30,
  },
  {
    id: 41,
    category: "Aguas y refrescos",
    name: "Sodas italianas 475ml",
    description: "Bebida mineralizada de fresa, maracuyá o piña menta.",
    price: 65,
    extraGroup: "drink",
    isRecommended: true,
    image: "/images/menu/soda-italiana-piña-menta.png",
  },

  // BEBIDAS CALIENTES
  {
    id: 42,
    category: "Bebidas calientes",
    name: "Café americano",
    price: 35,
    extraGroup: "drink",
    image: "/images/menu/cafe-americano.png",
  },
  {
    id: 43,
    category: "Bebidas calientes",
    name: "Café de olla",
    price: 40,
    extraGroup: "drink",
    image: "/images/menu/cafe-de-olla.png",
  },
  {
    id: 44,
    category: "Bebidas calientes",
    name: "Lechero",
    price: 60,
    extraGroup: "drink",
    image: "/images/menu/cafe-lechero.png",
  },
  {
    id: 45,
    category: "Bebidas calientes",
    name: "Capuchino",
    price: 60,
    extraGroup: "drink",
    image: "/images/menu/capuchino.png",
  },
  {
    id: 46,
    category: "Bebidas calientes",
    name: "Chai",
    price: 65,
    extraGroup: "drink",
    image: "/images/menu/chai.png",
  },
  {
    id: 47,
    category: "Bebidas calientes",
    name: "Chocolate",
    price: 65,
    extraGroup: "drink",
    image: "/images/menu/chocolate.png",
  },
  {
    id: 48,
    category: "Bebidas calientes",
    name: "Moka",
    price: 65,
    extraGroup: "drink",
    image: "/images/menu/moka.png",
  },
  {
    id: 49,
    category: "Bebidas calientes",
    name: "Caramel",
    price: 65,
    extraGroup: "drink",
    image: "/images/menu/caramel.png",
  },
  {
    id: 50,
    category: "Bebidas calientes",
    name: "Tisana",
    price: 65,
    extraGroup: "drink",
    image: "/images/menu/tisana-frutos-rojos.png",
  },

  // BEBIDAS FRÍAS
  {
    id: 51,
    category: "Bebidas frías",
    name: "Chocolate",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 52,
    category: "Bebidas frías",
    name: "Moka",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 53,
    category: "Bebidas frías",
    name: "Caramel",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 54,
    category: "Bebidas frías",
    name: "Capuchino",
    price: 60,
    extraGroup: "drink",
  },
  {
    id: 55,
    category: "Bebidas frías",
    name: "Chai",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 56,
    category: "Bebidas frías",
    name: "Dalgona",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 57,
    category: "Bebidas frías",
    name: "Tisana",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 58,
    category: "Bebidas frías",
    name: "Capuchino canela",
    price: 60,
    extraGroup: "drink",
  },
  {
    id: 59,
    category: "Bebidas frías",
    name: "Capuchino avellana",
    price: 65,
    extraGroup: "drink",
  },
  {
    id: 60,
    category: "Bebidas frías",
    name: "Café irlandés",
    price: 75,
    extraGroup: "drink",
    isNew: true,
  },

  // FRAPPÉS
  {
    id: 61,
    category: "Frappés",
    name: "Chocolate",
    price: 75,
    extraGroup: "drink",
  },
  { id: 62, category: "Frappés", name: "Moka", price: 85, extraGroup: "drink" },
  {
    id: 63,
    category: "Frappés",
    name: "Caramel",
    price: 85,
    extraGroup: "drink",
    image: "/images/menu/frappe-caramel.png",
  },
  {
    id: 64,
    category: "Frappés",
    name: "Capuchino",
    price: 75,
    extraGroup: "drink",
  },
  {
    id: 65,
    category: "Frappés",
    name: "Mazapán",
    price: 85,
    extraGroup: "drink",
    image: "/images/menu/frappe-mazapan.png",
  },
  {
    id: 66,
    category: "Frappés",
    name: "Avellana",
    price: 85,
    extraGroup: "drink",
    isRecommended: true,
    image: "/images/menu/frappe-avellana.png",
  },
  {
    id: 67,
    category: "Frappés",
    name: "Oreo",
    price: 85,
    extraGroup: "drink",
    isNew: true,
  },
  {
    id: 68,
    category: "Frappés",
    name: "Horchata",
    price: 70,
    extraGroup: "drink",
    image: "/images/menu/frappe-horchata.png",
  },
  {
    id: 69,
    category: "Frappés",
    name: "Polvillo",
    price: 70,
    extraGroup: "drink",
    image: "/images/menu/frappe-polvillo.png",
  },
  {
    id: 70,
    category: "Frappés",
    name: "Pozol con cacahuate",
    price: 70,
    extraGroup: "drink",
    image: "/images/menu/frappe-pozol-cacahuate.png",
  },
  {
    id: 71,
    category: "Frappés",
    name: "Pozol con chocolate",
    price: 85,
    extraGroup: "drink",
  },

  // SMOOTHIES
  {
    id: 72,
    category: "Smoothies",
    name: "Smoothie",
    description:
      "Sabores: manzana-avena, fresa-plátano, plátano-cacahuate, plátano-avellana, plátano-moras, mango-maracuyá, piña-coco, fresa-coco.",
    price: 110,
    extraGroup: "drink",
    image: "/images/menu/smoothie.png",
  },
];

export const menuExtras: MenuExtra[] = [
  { id: 73, group: "food", name: "Pollo", price: 25 },
  { id: 74, group: "food", name: "Queso panela", price: 20 },
  { id: 75, group: "food", name: "Queso mozzarella", price: 25 },
  { id: 76, group: "food", name: "Crutones", price: 15 },
  { id: 77, group: "drink", name: "Leche deslactada", price: 10 },
  { id: 78, group: "food", name: "Aderezo", price: 20 },
  { id: 79, group: "food", name: "Huevo", price: 10 },
  { id: 80, group: "food", name: "Cecina", price: 35 },
  { id: 81, group: "drink", name: "Leche de coco", price: 15 },
  { id: 82, group: "drink", name: "Leche de almendras", price: 15 },
];
