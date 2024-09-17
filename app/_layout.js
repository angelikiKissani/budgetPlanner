import {Stack} from 'expo-router/stack';
const Layout = () => {

    return (
    <Stack>
        <Stack.Screen name="index" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"}}/>
        
        
    </Stack>)

}

export default Layout