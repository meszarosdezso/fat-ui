export default function Banners() {
  return (
    <section id="banners">
      <h2>Banners</h2>

      <div className="banners">
        <div className="banner warn">
          <h3 className="banner-title">Watch out!</h3>

          <p className="banner-body">
            This is a banner and it probably has something important to say!
          </p>
        </div>
        <br />

        <div className="banner elevated danger">
          <h3 className="banner-title">I am elevated!</h3>

          <p className="banner-body">
            My color indicates that this text might be an error.
          </p>
        </div>
        <br />

        <div className="banner sea light">
          <h3 className="banner-title">I can be light</h3>

          <p className="banner-body">
            You can use me to show that something was successful.
          </p>
        </div>
      </div>
    </section>
  )
}
