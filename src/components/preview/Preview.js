const Preview = ({ compiled }) => {
  return (
    <div className="wrapper">
      <h3 className="item previewed-item" dangerouslySetInnerHTML={{ __html: compiled }} />
    </div>
  );
};

export default Preview;