import { createContext, useState } from "react";

export const SettingContext = createContext();

export const SettingContextProvider = ({children}) => {

    const defaultSettings = {
        fontSize : "17px",
        themeColor : "#1D546D",
        layout : "spacious",
    };

    const [settings, setSettings] = useState(defaultSettings);

    const handleSettings = (e) => {
        const key = e.target.name
        setSettings((prev) => ({...prev, [key] : e.target.value }))
    }

    const resetSettings = () => {
        setSettings(defaultSettings);
    }

    return(
        <SettingContext.Provider value={{settings, handleSettings, resetSettings}}>
            {children}
        </SettingContext.Provider>
    )
}