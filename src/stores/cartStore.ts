import { cartStoreActionsType, cartStoreStateType } from "@/types";
import { create } from "zustand";

const useStore = create<cartStoreStateType & cartStoreActionsType>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),
  removeFromCart: (item) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem.id !== item.id),
    })),
  clearCart: () => set({ cart: [] }),
}));

export default useStore;
