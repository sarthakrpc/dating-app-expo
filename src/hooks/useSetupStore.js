import create from "zustand";

const useSetupStore = create((set) => ({
  setupData: {
    firstName: "",
    birthDate: null,
    gender: "",
    sexualOrientation: "",
    visibileSexualOrientation: false,
    interests: [],
  },

  setData: (formData) =>
    set((state) => ({
      setupData: { ...state.setupData, ...formData },
    })),
}));

export default useSetupStore;
