const ErrorMessage = ({ error }) => {
  if (!error) return null
  return (
    <p>Name is required</p>
  )
};

export default ErrorMessage;
