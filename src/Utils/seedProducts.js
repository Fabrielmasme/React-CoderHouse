import db from "../data/db.js";
import { collection, addDoc } from "firebase/firestore";

const products = [
  {
    id: 1,
    name: "Creatina Monohidrato",
    description: "Creatina pura micronizada 300g",
    stock: 15,
    image: "/public/image/Creatina300g.webp",
    price: 450,
    category: "creatinas"
  },
  {
    id: 2,
    name: "Creatina HCL",
    description: "Creatina HCL de rápida absorción 200g",
    stock: 8,
    image: "/public/image/CreatinaPack300g.webp",
    price: 680,
    category: "creatinas"
  },
  {
    id: 3,
    name: "Creatina Alcalina",
    description: "Creatina Kre-Alkalyn 120 cápsulas",
    stock: 12,
    image: "/public/image/ImpactCreatineMyProtein.webp",
    price: 590,
    category: "creatinas"
  },
  {
    id: 4,
    name: "Pancake Mix Proteico",
    description: "Mix para pancakes sabor vainilla 500g",
    stock: 20,
    image: "/public/image/PancakesProteicosGrangerChocolate.webp",
    price: 380,
    category: "pancakes"
  },
  {
    id: 5,
    name: "Pancake Mix Chocolate",
    description: "Mix para pancakes sabor chocolate 500g",
    stock: 18,
    image: "/public/image/PancakesProteicosGrangerVainilla.webp",
    price: 380,
    category: "pancakes"
  },
  {
    id: 6,
    name: "Proteína Whey",
    description: "Proteína Whey concentrada sabor chocolate 1kg",
    stock: 25,
    image: "/public/image/ProteinaOneFitClassic.png",
    price: 890,
    category: "proteinas"
  },
  {
    id: 7,
    name: "Proteína Isolate",
    description: "Proteína Whey aislada sabor vainilla 1kg",
    stock: 16,
    image: "/public/image/ProteinaStarNutrion908gChocolate.webp",
    price: 1250,
    category: "proteinas"
  },
  {
    id: 8,
    name: "Proteína Vegana",
    description: "Proteína de arveja y arroz sabor frutilla 900g",
    stock: 10,
    image: "/public/image/ProteinaStarNutrion908gVainilla.webp",
    price: 980,
    category: "proteinas"
  },
  {
    id: 9,
    name: "Proteína Caseína",
    description: "Caseína micelar sabor cookies 1kg",
    stock: 14,
    image: "/public/image/Whey_protein_frutilla_doypack.png",
    price: 1150,
    category: "proteinas"
  }
]

const seedProducts = async () => {
  try {
    const productsRef = collection(db, "products");

    // Se usa Promise.all para esperar todas las operaciones
    await Promise.all(
      products.map(async ({ id, ...dataProduct }) => {
        await addDoc(productsRef, dataProduct);
      })
    );

    console.log("✅ Productos agregados correctamente a Firestore");
    process.exit(0); // Terminar el proceso exitosamente
  } catch (error) {
    console.error("❌ Error al agregar productos:", error);
    process.exit(1); // Terminar con error
  }
};

seedProducts();
