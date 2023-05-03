const Markdown = ({ code, handleChange }) => {
  return (
    <div className="wrapper">
      <textarea onChange={handleChange} value={code} />
    </div>
  )
}
export default Markdown