export default function Footer() {
  return (
    <footer className="mt-8 mb-4 p-4 centered text-grey" id="Footer">
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
