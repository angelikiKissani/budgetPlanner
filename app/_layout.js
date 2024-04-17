import {Stack} from 'expo-router/stack';

const Layout = () => {
    return <Stack>
        {/* <Stack.Screen name="index"/>
        <Stack.Screen name="screens/authentication/SignInScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
         }}/>
        <Stack.Screen name="screens/authentication/SignUpScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
         }}/>     
        <Stack.Screen name="screens/authentication/ForgotPassword" 
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