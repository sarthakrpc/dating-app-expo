import create from "zustand";

const useSetupStore = create((set) => ({
  setupData: {
    firstName: "",
    birthDate: subtractYears(16),
    gender: "",
    sexualOrientation: "",
    privateSexualOrientation: false,
    interests: [],
  },

  setData: (formData) =>
    set((state) => ({
      setupData: { ...state.setupData, ...formData },
    })),
}));

function subtractYears(numOfYears, date = new Date()) {
  const dateCopy = new Date(date.getTime());
  dateCopy.setFullYear(dateCopy.getFullYear() - numOfYears);
  return dateCopy;
}

export default useSetupStore;
