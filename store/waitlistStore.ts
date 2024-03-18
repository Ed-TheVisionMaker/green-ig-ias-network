import { create } from 'zustand';

export type waitlistStore = {
    showModal: boolean;
    toggleModal: () => void;
};

export const useWaitlistStore = create<waitlistStore>((set) => ({
    showModal: false,
    toggleModal: () => set((state) => ({ showModal: !state.showModal })),
}))

