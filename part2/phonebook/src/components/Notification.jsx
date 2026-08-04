
const Notification = ({successMsg, errorMsg}) => {
  return (
    <div className={successMsg ? "success" : errorMsg ? "error" : ""}>
      {successMsg ? <p>{successMsg}</p> : errorMsg ? <p>{errorMsg}</p> : null}
    </div>
  )
}

export default Notification
