import { Product } from "@/types/game"; 
const API_URL = "https://6921f1d4512fb4140be1d483.mockapi.io/api/v1/game";

const check = async (res: Response) => {
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `Error ${res.status}`);
  }
  return res.json();
};

export const productService = {
  // GET ALL
  getAll: async (): Promise<Product[]> => {
    const res = await fetch(API_URL, { cache: "no-store" });
    return check(res);
  },

  // GET BY ID
  getById: async (id: string): Promise<Product | null> => {
    const res = await fetch(`${API_URL}/${id}`, { cache: "no-store" });

    if (res.status === 404) return null;
    if (!res.ok) throw new Error(`Error al obtener el producto (status ${res.status})`);

    return check(res);
  },

  // CREATE
  create: async (data: Omit<Product, "id">): Promise<Product> => {
    const res = await fetch(API_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },

  // UPDATE
  update: async (id: string, data: Partial<Product>): Promise<Product> => {
    const res = await fetch(`${API_URL}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    return check(res);
  },

  // DELETE
  remove: async (id: string): Promise<void> => {
    const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });

    if (!res.ok) {
      throw new Error(`Error al eliminar el producto ${id}`);
    }
    // mockapi devuelve 200 vacío → no se necesita check()
  },
} as const;