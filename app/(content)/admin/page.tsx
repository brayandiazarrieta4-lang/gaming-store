'use client';

import { FormEvent, useState } from 'react'; // Eliminamos useEffect
import { productService } from '@/services/gameService';
import type { Product } from '@/types/game';
import { ProductCard } from '@/features/games/GameCard';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Plus } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from '@/components/ui/dialog';
import { useFetchGames } from '@/hooks/useFetchGames'; // <-- Importación del hook

export default function ProductsPage() {
  // 1. Usar el hook para obtener y gestionar el estado de carga/error
  const { products, loading, refetch } = useFetchGames(true); // 'refetch' es la nueva 'load'

  const [open, setOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // La función 'load' original ha sido reemplazada por 'refetch' del hook, 
  // por lo que no necesitamos definirla aquí.

  // --- Funciones de Lógica de Negocio ---

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    // ... (El cuerpo de handleSubmit sigue igual, pero al final llama a refetch)
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    const productData = {
      id: editingProduct?.id,
      title: formData.get('title') as string,
      name: formData.get('title') as string, // MockAPI usa "name"
      price: Number(formData.get('price') || 0),
      description: (formData.get('description') as string) || 'Sin descripción',
      image: (formData.get('image') as string) || 'https://via.placeholder.com/600x800?text=Game',
      category: (formData.get('category') as string) || 'Videojuego',
      genre: (formData.get('genre') as string) || 'Acción',
      platforms: (formData.get('platforms') as string)?.split(',').map(p => p.trim()).filter(Boolean) || ['PC'],
      releaseDate: formData.get('releaseDate') as string || new Date().toISOString().split('T')[0],
      developer: (formData.get('developer') as string) || 'Estudio Independiente',
    };

    try {
      if (editingProduct) {
        await productService.update(editingProduct.id!, productData);
        toast.success('Producto actualizado correctamente');
      } else {
        await productService.create(productData);
        toast.success('Producto creado correctamente');
      }
      setOpen(false);
      setEditingProduct(null);
      await refetch(); // <-- Llama a la función del hook para recargar
    } catch (err) {
      console.error(err);
      toast.error(editingProduct ? 'Error al actualizar' : 'Error al crear producto');
    }
  };

  const handleEdit = (product: Product) => {
    setEditingProduct(product);
    setOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('¿Estás seguro de eliminar este producto?')) return;
    try {
      await productService.remove(id);
      toast.success('Producto eliminado');
      await refetch(); // <-- Llama a la función del hook para recargar
    } catch {
      toast.error('Error al eliminar');
    }
  };

  const closeDialog = () => {
    setOpen(false);
    setEditingProduct(null);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-semibold">Cargando productos...</div>
      </div>
    );
  }

  // ... (El resto del return es idéntico)
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* ... (Controles de diálogo) */}

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {products.length === 0 ? (
            <div className="col-span-full text-center py-20 text-gray-500">
              <p className="text-xl">No hay productos aún</p>
              <p className="mt-2">¡Agrega el primero!</p>
            </div>
          ) : (
            products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onEdit={handleEdit}
                onDelete={handleDelete}
                disableNavigation={true} 
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}