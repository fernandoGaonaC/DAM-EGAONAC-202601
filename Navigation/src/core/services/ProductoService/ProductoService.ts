import { Product } from "../../entities/Producto.entity";
import { ProductoRepository } from "../../repositories";

const ProductoService = {
  register: async (producto: Product): Promise<Product> => {
    const id = await ProductoRepository.save(producto);
    return { ...producto, id };
  },

  list: async (): Promise<Product[]> => {
    return await ProductoRepository.getAll();
  },
};

export default ProductoService;
