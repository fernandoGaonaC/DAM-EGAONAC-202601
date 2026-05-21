// core/repositories/ProductRepository.ts
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Product } from "../../entities/Producto.entity";

const PRODUCT_KEY = "@PRODUCTS";

const ProductRepository = {
save: async (producto: Product): Promise<number> => {
  const stored = await AsyncStorage.getItem(PRODUCT_KEY);
  const products: Product[] = stored ? JSON.parse(stored) : [];
  const id = products.length > 0 ? products[products.length - 1].id! + 1 : 1;
  const newProduct = { ...producto, id };
  products.push(newProduct);
  await AsyncStorage.setItem(PRODUCT_KEY, JSON.stringify(products));

  return id; 
},


  getAll: async (): Promise<Product[]> => {
    const stored = await AsyncStorage.getItem(PRODUCT_KEY);
    return stored ? JSON.parse(stored) : [];
  },

  clear: async (): Promise<void> => {
    await AsyncStorage.removeItem(PRODUCT_KEY);
  },
};

export default ProductRepository;
