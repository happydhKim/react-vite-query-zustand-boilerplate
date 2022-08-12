import create from 'zustand';

interface countState {
  count: number;
  increase: (by: number) => void;
};

const useCalculatorStore = create<countState>()((set) => ({
  count: 1,
  increase: () => set((state) => ({ count: state.count + 1 })),
}));

export default useCalculatorStore;
