import './section.css'

type Props<T> = {
    title: string
    description: string
    galleryItems: Array<T & {image: string, description: string}>
}

const Section = <T extends unknown>({title, description, galleryItems} : Props<T>) => {
  return (
    <section className='section'>
        <div>
          <h2 className='title'>{title}</h2>
          <h4 className='description'>{description}</h4>
        </div>

        <div className="gallery">
          {galleryItems.map(i => <div className="gallery-item">
                    <img src={i.image} alt={i.description}/>
                      <div className='extra-info'>Testing</div>


                    </div>)}
        </div>


    </section>
  )
}

export default Section