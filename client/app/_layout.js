import {Stack} from 'expo-router/stack';

const Layout = () => {
    return <Stack>
        {/* <Stack.Screen name="index"/> */}
        <Stack.Screen name="SignInScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"
         }}/>
        <Stack.Screen name="index" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"
         }}/>     
        {/* <Stack.Screen name="screens/authentication/ForgotPassword" 
         options={{
            headerShadowVisible:false ,
            headerShown:false,
         }}/> */}

        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        {/* <Stack.Screen name="TabNavigator"options={{
            headerShadowVisible:false ,
            headerShown:false,
         }}></Stack.Screen> */}
    </Stack>

}

export default Layout