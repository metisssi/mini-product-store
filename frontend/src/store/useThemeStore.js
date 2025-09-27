import { create } from "zustand";

export const useThemeStore = create((set) => ({
    theme: localStorage.getItem("preffed-theme") || "forest",
    setTheme: (theme) => {
        localStorage.setItem("preffed-theme", theme); 
        set({ theme })
    }, 
}
))

