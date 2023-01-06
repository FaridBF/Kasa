const Tag = (data) => {
  // console.log('dataTag', data);
  return (
    <div>
      {data.data.map((tag, index) => {
        return (
          <span className="tag-profil-section" key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};
export default Tag;
