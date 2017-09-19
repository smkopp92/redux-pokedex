import React from 'react'

const Pokemon = ({caught, name, id, onClick}) => {
  let icon
  if(caught){
    icon = <img src={"https://maxcdn.icons8.com/Share/icon/color/Gaming//pokeball1600.png"} height={20} width={20}/>
  }
  return(
    <li onClick={() => onClick(id)}>
      {name}
      {icon}
    </li>
  )
}

export default Pokemon
