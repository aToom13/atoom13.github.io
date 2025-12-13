import { create } from 'zustand';
import { Project, Certificate } from '../data';

type ModalType = 'project' | 'certificate' | null;

interface ModalState {
    activeModal: ModalType;
    selectedItem: Project | Certificate | null;
    openModal: (type: ModalType, item: Project | Certificate) => void;
    closeModal: () => void;
}

export const useModalStore = create<ModalState>((set) => ({
    activeModal: null,
    selectedItem: null,
    openModal: (type, item) => set({ activeModal: type, selectedItem: item }),
    closeModal: () => set({ activeModal: null, selectedItem: null }),
}));
