export default function Lists() {
  return (
    <section id="lists">
      <h2>Lists</h2>
      <div className="lists">
        <div className="list-type">
          <br />
          <h3>Default</h3>
          <ul className="list">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className="list-type">
          <br />
          <h3>Seperated</h3>
          <ul className="list separated">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
        <div className="list-type">
          <br />
          <h3>Deep</h3>
          <ul className="list deep">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
            <li>Item 4</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
