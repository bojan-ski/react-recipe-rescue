const Footer = () => {
  const year = new Date().getFullYear()

  return (
      <footer className="footer text-center text-white">
          <p className="py-4 mb-0">
              &copy; {year} BP Development. All rights reserved.
          </p>
      </footer>
  )
}

export default Footer