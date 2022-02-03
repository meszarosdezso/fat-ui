import { faEdit } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default function Tables() {
  return (
    <section id="tables">
      <h2>Tables</h2>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Type</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Hamburger</td>
              <td>1 db</td>
              <td className="price">1290 Ft</td>
              <td>Anna</td>
              <td>In place</td>
              <td>
                <FontAwesomeIcon icon={faEdit} />
              </td>
            </tr>
            <tr>
              <td>Pizza</td>
              <td>1 db</td>
              <td className="price">2340 Ft</td>
              <td>Huba</td>
              <td>To go</td>
              <td>
                <FontAwesomeIcon icon={faEdit} />
              </td>
            </tr>
            <tr>
              <td>Ice Tea</td>
              <td>8 db</td>
              <td className="price">690 Ft</td>
              <td>Dezso</td>
              <td>Delivery</td>
              <td>
                <FontAwesomeIcon icon={faEdit} />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Product</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Customer</th>
              <th>Type</th>
              <th>&nbsp;</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </section>
  )
}
