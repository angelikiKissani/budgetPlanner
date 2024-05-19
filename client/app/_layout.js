import {Stack} from 'expo-router/stack';

const Layout = () => {
    return <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="authentication/SignInScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"
         }}/>
        <Stack.Screen name="authentication/SignUpScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"
         }}/>     
        {/* <Stack.Screen name="screens/authentication/ForgotPassword" 
         options={{
            headerShadowVisible:false ,
            headerShown:false,
         }}/> */}
         <Stack.Screen name="settings/MyBudgetPlan" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade",
            animationDuration:"200"
         }}/> 

        <Stack.Screen name="(tabs)" options={{ headerShown: false,animation:"fade", animationDuration:"200"
     }} />
        
    </Stack>

}

export default Layout