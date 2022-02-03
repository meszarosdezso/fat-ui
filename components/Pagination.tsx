import { useState } from "react"

export default function Pagination() {
  const [state, setState] = useState(0)

  return (
    <div className="">
      <br />
      <h3>Pagination</h3>
      <br />

      <h4>Alphabetic</h4>

      <div id="pagination" className="pagination">
        <div className="pagination-pages">
          {Array(10)
            .fill(0)
            .map((_, i) => (
              <a key={i} onClick={() => setState(i)}>
                <div
                  className={`pagination-page ${i === state ? "active" : ""}`}
                >
                  {String.fromCharCode(i + 65)}
                </div>
              </a>
            ))}
        </div>
      </div>
      <br />
      <br />

      <h4>Numeric</h4>

      <div id="pagination" className="pagination">
        <div className="pagination-pages">
          {Array(4)
            .fill(0)
            .map((_, i) => (
              <a key={i} onClick={() => setState(i)}>
                <div
                  className={`pagination-page ${i === state ? "active" : ""}`}
                >
                  {i + 1}
                </div>
              </a>
            ))}
          <input
            className="pagination-page-setter pagination-page"
            type="text"
            placeholder="..."
          />

          {Array(4)
            .fill(0)
            .map((_, i) => (
              <a key={i + 42} onClick={() => setState(i + 42)}>
                <div
                  className={`pagination-page ${
                    state === i + 42 ? "active" : ""
                  }`}
                >
                  {i + 42}
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  )
}
