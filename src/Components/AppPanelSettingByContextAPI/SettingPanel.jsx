import { useContext } from "react";
import { SettingContext } from "./SettingContext";

const SettingPanel = () => {
  const { settings, handleSettings, resetSettings } =
    useContext(SettingContext);

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>
        🧑‍💼 User Application with Theme Changer
      </h1>
      <div
        style={{
          width: "200px",
          margin: "30px auto",
          textAlign: "center",
          border: "1px solid #000",
          padding: "20px 0",
        }}
      >
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="">Font Size : </label>
          <select
            name="fontSize"
            id=""
            onChange={handleSettings}
            value={settings.fontSize}
          >
            <option value="17px">Small</option>
            <option value="20px">Medium</option>
            <option value="23px">Large</option>
          </select>
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="">Theme : </label>
          <input
            type="color"
            name="themeColor"
            onChange={handleSettings}
            value={settings.themeColor}
          />
        </div>
        <div style={{ marginBottom: "12px" }}>
          <label htmlFor="">Layout : </label>
          <select
            name="layout"
            id=""
            onChange={handleSettings}
            value={settings.layout}
          >
            <option value="spacious">Spacious</option>
            <option value="compact">Compact</option>
          </select>
        </div>
        <button onClick={resetSettings}>Reset Settings</button>
      </div>
    </div>
  );
};

export default SettingPanel;
