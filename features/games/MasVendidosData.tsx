import { productService } from "@/services/gameService";
import { ProductCard } from "@/features/games/GameCard"; // Asegúrate de que esta ruta sea correcta
import MasVendidosBar from "./MasVendidosBar"; // Debe estar en el mismo directorio

/**
 * Componente de Servidor para obtener datos y renderizar el carrusel.
 */
export async function MasVendidosData() {
    // 1. Obtener los datos de MockAPI
    const products = await productService.getAll();

    if (!products || products.length === 0) {
        // Muestra un mensaje si no hay productos
        return <p className="text-center text-white py-10">No hay productos de MockAPI para mostrar en el carrusel.</p>;
    }

    // 2. Mapear los datos a componentes ProductCard
    const productCards = products.map((product) => (
        <ProductCard 
            key={product.id || product.title} 
            product={product} 
            // Opcional: Elimina estas props si no quieres los botones de admin/eliminar
            // onEdit={() => console.log('Edit')} 
            // onDelete={() => console.log('Delete')}
        />
    ));

    // 3. Pasar las cards al carrusel (MasVendidosBar) como hijos
    return <MasVendidosBar>{productCards}</MasVendidosBar>;
}