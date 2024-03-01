import './card-monster.style.css'

const CardMonster = ({monster})=>{
  const { name, email, id } = monster;

  return (
    <div key={id} className='card-container'>
      <img src={`https://robohash.org/${id + 590}?set=set2&size=180x180`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div> 
  )
}

export default CardMonster