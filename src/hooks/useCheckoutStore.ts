import create from "zustand";

export interface IDog {
  id: string;
  url: string;
  title: string;
}

export interface ICheckout {
  dogs: IDog[];
  dogsCheckout: IDog[];
  addDog: (dog: IDog) => void;
  removeDog: (dog: IDog) => void;
  load: (dogs: IDog[]) => void;
}

export const useStore = create<ICheckout>((set) => ({
  dogs: [],
  dogsCheckout: [],
  addDog: (dog) =>
    set((state) => ({ dogsCheckout: [...state.dogsCheckout, dog] })),
  removeDog: (dog) =>
    set((state) => ({
      dogsCheckout: state.dogsCheckout.filter((item) => item.id !== dog.id),
    })),
  load: (dogs) => set((state) => ({ dogs })),
}));