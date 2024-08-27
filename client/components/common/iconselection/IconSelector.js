import React from 'react'

import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const IconSelector = ({family,color,icon,size}) =>{
    if(icon=="add"){
        return(
            <MaterialIcons name="add" size={32} color="white" />
        )
    }
    if(family=="FontAwesome5"){
        return(
        <FontAwesome5 name={icon} size={size} color={color} />)
    }
    //  ["graduation-cap","credit-card","cake","laptop","location-pin"] },
    else if (family=="Entypo"){
        return( <Entypo name={icon} size={size} color={color} />)
    }
    else if (family=="AntDesign"){
        return(
        <AntDesign name={icon} size={size} color={color} />)
    }
    else if (family=="Fontisto"){
        return (<Fontisto name={icon} size={size} color={color} />)
    }
    
    else if (family=="MaterialIcons"){
        return (<MaterialIcons name={icon} size={size} color={color} />)
    }
    
}


export default IconSelector;