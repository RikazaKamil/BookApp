import { StyleSheet, Text, View, Image, Button,ScrollView, TextInput,Pressable} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

function Login({navigation}) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',}}>
      <Image 
        style={styles.logolog}
        source={require('./assets/login.jpg')}
      />

      <TextInput
        style={styles.in}
        placeholder="E-mail"
      />

      <TextInput secureTextEntry={true}
        style={styles.in}
        placeholder="Password"
      />

      <Button
        title="Sign In"
        color="#5d5dde"
        onPress={ () => navigation.navigate ("Home")}
      />
      <Text style={{ fontWeight: 'bold' }}>
        OR
      </Text>

      <Text style={{fontSize:16}}> Don't have an account? </Text>
       <Pressable
         onPress={() =>navigation.navigate('SignUp')}>
         <Text style={{color:'#5d5dde',fontSize:20}}>Sign up</Text>
       </Pressable>
      <Text>
        
      </Text>

      <Pressable
         onPress={() =>navigation.navigate('Reset')}>
         <Text style={{color:'#f8a521',fontSize:16,}}>forgot password?</Text>
       </Pressable>
    </View>
    </ScrollView>
    
  );
}

function Reset({navigation}) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',}}>

      <TextInput
        style={styles.in}
        placeholder="E-mail"
      />

      <TextInput secureTextEntry={true}
        style={styles.in}
        placeholder="New Password"
      />
      <TextInput secureTextEntry={true}
        style={styles.in}
        placeholder="Confirm New Password"
      />

      <Button
        title="Reset"
        color="#5d5dde"
        onPress={ () => navigation.navigate ("Login")}
      />
    </View>
    </ScrollView>
    
  );
}

function SignUp({navigation}) {
  return (
    <ScrollView>
    <View style={{ flex: 1, alignItems: 'center',}}>
      <Image 
        style={styles.logolog}
        source={require('./assets/login.jpg')}
      />
      <TextInput
        style={styles.in}
        placeholder="First Name"
      />
      <TextInput
        style={styles.in}
        placeholder="Last Name"
      />
      <TextInput
        style={styles.in}
        placeholder="E-mail"
      />

      <TextInput secureTextEntry={true}
        style={styles.in}
        placeholder="Password"
      />
      <TextInput secureTextEntry={true}
        style={styles.in}
        placeholder="Confirm Password"
      />

      <Button
        title="Sign Up"
        color="#5d5dde"
      />
    </View>
    </ScrollView>
  );
}
const Stack = createStackNavigator();

const Book = () => {
  return(
    <NavigationContainer independent={true}>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Reset" component={Reset} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Book;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  image:{
    marginTop:80,
    width:'80%',
    height:300,
    borderRadius:10
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  logolog:{
    marginTop:50,
    width:'50%',
    height:200,
  },
   
  in: {
    width:"80%",
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius:10
  },
});