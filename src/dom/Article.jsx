export default function Article({
  title,
  pretitle,
  description,
  img,
  aspect,
  index,
}) {
  return (
    <article className='item'>
      <figure className='item__fig'>
        <div className='item__aspect' style={{ '--aspect': aspect }}></div>
        <img src={img} alt={`img-0${index}`} className='item__img' />
      </figure>
      <span className='item__pretitle'>{pretitle}</span>
      <h2 className='item__title'>{title}</h2>
      <span className='item__counter'>0{index}</span>
      <p className='item__description'>{description}</p>
    </article>
  );
}
