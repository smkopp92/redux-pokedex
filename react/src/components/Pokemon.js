import React from 'react'

const Pokemon = ({caught, name, id, onClick}) => {
  let icon
  if(caught){
    icon = <img src={"https://maxcdn.icons8.com/Share/icon/color/Gaming//pokeball1600.png"} className="pokeball" height={20} width={20}/>
  }
  return(
    <li onClick={() => onClick(id)}>
      <p className="pokemon">{name}</p>
      {icon}
    </li>
  )
}

export default Pokemon
