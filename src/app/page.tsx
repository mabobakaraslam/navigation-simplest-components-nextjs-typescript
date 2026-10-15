// File: app/page.tsx located in app-name/src/app/

export default function page() {
  return (
    <div style={{ backgroundColor: "black", color: "white", padding: "25px", display: "flex", flexDirection: "column", gap: "25px" }}>
      
      <h1>This is main componenet (app/page.tsx)</h1>
      
      <div style={{ backgroundColor: "yellow", color: "red", padding: "5px" }}>
        <h1>Home page</h1>
        <p>This is home page container</p>
      </div>
      
    </div>
  );
}