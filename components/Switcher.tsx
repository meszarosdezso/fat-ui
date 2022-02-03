export default function Switcher() {
  return (
    <div style={{ maxWidth: "500px" }}>
      <br />
      <br />
      <h3>Switcher</h3>

      <div className="switcher">
        <div className="switcher-item active">Left</div>
        <div className="switcher-item">Middle</div>
        <div className="switcher-item">Right</div>
      </div>
    </div>
  )
}
