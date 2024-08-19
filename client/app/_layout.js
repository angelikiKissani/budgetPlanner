import {Stack} from 'expo-router/stack';

const Layout = () => {
    return <Stack>
        <Stack.Screen name="index"/>
        <Stack.Screen name="screens/SignInScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"
         }}/>
        <Stack.Screen name="screens/SignUpScreen" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade"
         }}/>     
        
         <Stack.Screen name="screens/MyBudgetPlan" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade",
            animationDuration:"200"
         }}/> 
         <Stack.Screen name="screens/EditProfile" options={{
            headerShadowVisible:false ,
            headerShown:false,
            animation:"fade",
            animationDuration:"200"
         }}/> 
         <Stack.Screen name="screens/Categories" options={{
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