import { useContext } from "react";
import { SettingContext } from "./SettingContext";

const UserApp = () => {
  const { settings } = useContext(SettingContext);

  return (
    <div
      style={{
        border: `3px solid ${settings.themeColor}`,
        fontSize: settings.fontSize,
        padding: settings.layout === "compact" ? "10px" : "35px",
        color: settings.themeColor,
        borderRadius: "10px",
        margin: "30px auto",
        width: "500px",
      }}
    >
      <h1>📝 User Panel</h1>
      <p>
        Hi User, here you can change the theme of this app as your convinent.
      </p>
    </div>
  );
};

export default UserApp;
