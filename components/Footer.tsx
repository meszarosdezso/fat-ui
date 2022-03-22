export default function Footer() {
  return (
    <footer id="Footer">
      <p>
        Created with 🕗 by{" "}
        <a className="text-royal" href="https://github.com/meszarosdezso">
          Dezso Meszaros
        </a>
      </p>
      {new Date().getFullYear()} © MIT License
    </footer>
  )
}
