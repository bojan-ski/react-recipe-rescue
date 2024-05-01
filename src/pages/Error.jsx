import { Link, useRouteError } from "react-router-dom"

const Error = () => {
  const error = useRouteError()
  // console.log(error);

  if (error.status === 404) {
    return (
      <div className="container error d-flex justify-content-center align-items-center">
        <div className="text-center">
          <h3 className="mb-3">
            The page you are looking for does not exist!
          </h3>
          <Link to='/' className="btn btn-success">
            Back to Home page
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container error text-white d-flex justify-content-center align-items-center">
      <div className="text-center">
        <h3 className="mb-3">
          Something went wrong!
        </h3>
        <Link to='/' className="text-decoration-none btn text-white border-warning">
          Back to Home page
        </Link>
      </div>
    </div>
  )
}

export default Error