import CardMonster from '../card/card-monster.components';
import './card-list.style.css'

const CardList = ({monsters}) => {
  return (
    <div className='card-list'>
      {monsters.map((monster) => {
        return <CardMonster key={monster.id} monster={monster}/>
      })}
    </div>
  );
}

export default CardList

