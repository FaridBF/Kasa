/**
 * Composant permettant l'affichage du tag (descriptif de l'annonce via des mots clés)
 * Présent pour le moment dans la page accomodationSheet
 */
const Tag = (data) => {
  return (
    <div className='tag-container'>
      {data.data.map((tag, index) => {
        return (
          <span className='tag-profil-section' key={index}>
            {tag}
          </span>
        );
      })}
    </div>
  );
};
export default Tag;
