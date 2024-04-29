import loadingGif from '../assets/loading.gif'

const Loading = () => {
  return (
    <div className='loading d-flex justify-content-center align-items-center'>
        <img src={loadingGif} alt="loading" />
    </div>
  )
}

export default Loading