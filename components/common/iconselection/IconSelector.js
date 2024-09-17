import React from 'react'
import {Image} from 'react-native'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Fontisto from '@expo/vector-icons/Fontisto';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

import { COLORS, icons } from '../../../constants';


const IconSelector = ({family,color,icon,size,pressed}) =>{
    if(icon=="add"){
        return(
            <MaterialIcons name="add" size={32} color={COLORS.dark} />
        )
    }
    if(icon=="add-category"){
        return(
            <MaterialIcons name="add-circle" size={27} color={COLORS.warm} /> )
    }

    if(icon=="home-footer"){
        return(
            pressed?<AntDesign name="home" size={33} color={COLORS.tertiary} />:
            <AntDesign name="home" size={33} color={COLORS.gray2}/>
            
        )
    }
    if(icon=="expenses-footer"){
        return(
            pressed?
            <AntDesign name="creditcard" size={31} color={COLORS.tertiary} style={{marginTop:3}} />
            :
            <AntDesign name="creditcard" size={31} color={COLORS.gray} style={{marginTop:3}} />

        )
    }
    if(icon=="savings-footer"){
        return(
            pressed?
            <MaterialCommunityIcons name="piggy-bank-outline" size={31} color={COLORS.tertiary} style={{marginTop:3}} />:
            <MaterialCommunityIcons name="piggy-bank-outline" size={31} color={COLORS.gray} style={{marginTop:3}} />
        )
    }
    if(icon=="account-footer"){
        return(
            pressed?
            <AntDesign name="user" size={32} color={COLORS.tertiary} />:
            <AntDesign name="user" size={32} color={COLORS.gray} />
        )
    }

    else if(family=="FontAwesome5"){
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