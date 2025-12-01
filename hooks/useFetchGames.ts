import { useState, useEffect, useCallback } from 'react';
import { productService } from '@/services/gameService'; // Asegúrate de que esta ruta es correcta
import type { Product } from '@/types/game'; // Asegúrate de que esta ruta es correcta

// Define el tipo de retorno del hook
interface FetchState {
  products: Product[];
  loading: boolean;
  error: boolean;
  refetch: () => Promise<void>; // Función para recargar los datos
}

/**
 * Hook personalizado para obtener la lista de productos y manejar el estado.
 * @param {boolean} shouldFetch Define si debe hacer la llamada de datos (útil para el administrador).
 */
export const useFetchGames = (shouldFetch: boolean = true): FetchState => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  // Usa useCallback para asegurar que 'load' tiene una referencia estable
  const load = useCallback(async () => {
    if (!shouldFetch) return; 

    setLoading(true);
    setError(false);
    
    try {
      const data = await productService.getAll();
      setProducts(data);
    } catch (err) {
      console.error("Error fetching games:", err);
      setError(true);
      // Opcional: setProducts([]) si deseas vaciar la lista en caso de error
    } finally {
      setLoading(false);
    }
  }, [shouldFetch]); // Recalcula 'load' solo si 'shouldFetch' cambia

  // Carga inicial al montar el componente
  useEffect(() => {
    load();
  }, [load]); // Dependencia: la función 'load' (estable gracias a useCallback)

  return { products, loading, error, refetch: load };
};
