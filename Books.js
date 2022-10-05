import { Button, View, Text,Pressable,Image,ScrollView} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


function Books ({navigation}){
    return(
        <ScrollView style={{
            marginHorizontal:15,
            paddingLeft:5,
            paddingRight:5,
            }}>
        
         <View style={{flexDirection:'row'}} >
        
        <Pressable onPress= {() => navigation.navigate("Book01")}> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'https://www.refinery29.com/images/8636889.jpg'}}
             style={{width:'100%',height:160}}
           />
            
         </View>
         <Text style={{marginTop:5}}>KNOW MY NAME</Text>    
         </View>
        
         </Pressable>
         <Pressable onPress={() =>navigation.navigate('Book02')}> 
         <View style={{width:100,height:160,marginRight:18,marginLeft:18}}>
         <View >
         <Image
             source={{uri:'https://images1.penguinrandomhouse.com/cover/9780812988406'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text>WHEN BREATH BECOMES AIR</Text>    
         </View>       
         </Pressable>
        
         <Pressable onPress={() =>navigation.navigate('Book03')}> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'https://images2.penguinrandomhouse.com/cover/9780143107354'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>FEAR OF FLYING</Text>    
         </View>
         </Pressable> 
        
         </View>
        
         <View style={{flexDirection:'row',marginTop:50}}>
        
        <Pressable> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6-asP9Exg6COL_ECYWrutWLGkUUk_3P4rFg&usqp=CAU'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>ICON STEVE JOBS</Text>    
         </View>
        
         </Pressable>
         <Pressable> 
         <View style={{width:100,height:160,marginRight:18,marginLeft:18}}>
         <View >
         <Image
             source={{uri:'data:image/jpeg;base64,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'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text>REGINA PHALENGE</Text>    
         </View>       
         </Pressable>
        
         <Pressable> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'data:image/jpeg;base64,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'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>EINSTEIN</Text>    
         </View>
         </Pressable> 
        
         </View>
        
         <View style={{flexDirection:'row',marginTop:50}}>
        
        <Pressable> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'data:image/jpeg;base64,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'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>THIS IS NOT A LOVE STORY</Text>    
         </View>
        
         </Pressable>
         <Pressable> 
         <View style={{width:100,height:160,marginRight:18,marginLeft:18}}>
         <View >
         <Image
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULL3mFArr5iBRLCugkPopSq264Tgovjic7w&usqp=CAU'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text>THE COURTESAN'S PAWN</Text>    
         </View>       
         </Pressable>
        
         <Pressable> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaCRfG5TR8ekdkH_6pkg8GnVccc8SH4zDeuw&usqp=CAU'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>THE JOURNEY AS LYCANTHROPE</Text>    
         </View>
         </Pressable> 
        
         </View>
        
         <View style={{flexDirection:'row',marginTop:50}}>
        
        <Pressable> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRuQbA_JXkmGH-MVYYd9ZtXQzqum74uwxBRQ&usqp=CAU'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>Book Name</Text>    
         </View>
        
         </Pressable>
         <Pressable> 
         <View style={{width:100,height:160,marginRight:18,marginLeft:18}}>
         <View >
         <Image
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqpVwIAYGFIamsXbvqJ0sDFTrXpBqUCFTQKQ&usqp=CAU'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text>THE HUMAN MEMORY</Text>    
         </View>       
         </Pressable>
        
         <Pressable> 
         <View style={{width:100,height:160,}}>
         <View >
           <Image
             source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqwJCHhuvc1pBOWT-BhCH8fki_jjryIox8eQ&usqp=CAU'}}
             style={{width:'100%',height:160}}
           />
         </View>
         <Text style={{marginTop:5}}>THE MINUNS FACTION</Text>    
         </View>
         </Pressable> 
        
         </View>
        <Pressable
        style={{width:'100%',height:40,marginBottom:50,marginTop:50,alignItems:'center'}}
        onPress={() =>navigation.navigate('Home')}>
          <Text style={{color:'#5d5dde'}}>Load more...</Text>
        </Pressable>               
        </ScrollView>
    )
}


function Book1Details({}){
  return(
    <View style={{backgroundColor:'#eaebef', paddingTop:18}}>
    <View style={{width:256,height:450,marginLeft:65,marginBottom:18}}>
    <Image
           source={{uri:'https://www.refinery29.com/images/8636889.jpg'}}
           style={{width:'100%',height:450}}
         />
      </View> 
      <View style={{width:330,height:180,marginLeft:28,alignItems:'baseline'}}>

       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Book name :</Text>
       <Text style={{fontSize:18}}> KNOW MY NAME</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Author :</Text>
       <Text style={{fontSize:18}}>Chanel Miller</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Description :</Text>
       <Text style={{fontSize:18}}>Motivation from true incidents</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Book Price :</Text>
       <Text style={{fontSize:18}}>$14</Text>       
       </View>
       

      </View>

    
  </View>
  );
}
function Book2Details({}){
  return(
    <View style={{backgroundColor:'#eaebef', paddingTop:18}}>
    <View style={{width:256,height:450,marginLeft:65,marginBottom:18}}>
    <Image
           source={{uri:'https://images1.penguinrandomhouse.com/cover/9780812988406'}}
           style={{width:'100%',height:450}}
         />
      </View> 
      <View style={{width:330,height:180,marginLeft:28,alignItems:'baseline'}}>

       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Book name :</Text>
       <Text style={{fontSize:18}}> WHEN BREATH BECOMES AIR</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Author :</Text>
       <Text style={{fontSize:18}}> Paul Kalanithi</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Description :</Text>
       <Text style={{fontSize:18}}> Biography</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Book Price :</Text>
       <Text style={{fontSize:18}}>$26</Text>       
       </View>
       

      </View>

    
  </View>
  );
}
function Book3Details({}){
  return(
    <View style={{backgroundColor:'#eaebef', paddingTop:18}}>
    <View style={{width:256,height:450,marginLeft:65,marginBottom:18}}>
    <Image
           source={{uri:'https://images2.penguinrandomhouse.com/cover/9780143107354'}}
           style={{width:'100%',height:450}}
         />
      </View> 
      <View style={{width:330,height:180,marginLeft:28,alignItems:'baseline'}}>

       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Book name :</Text>
       <Text style={{fontSize:18}}> FEAR OF FLYING</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Author :</Text>
       <Text style={{fontSize:18}}> Erica Jong</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Description :</Text>
       <Text style={{fontSize:18}}> Women's fiction</Text>       
       </View>
       <View style={{flexDirection:'row'}}>
       
       <Text style={{fontSize:18}}>Book Price :</Text>
       <Text style={{fontSize:18}}>$18</Text>       
       </View>
       

      </View>

    
  </View>
  );
}
const Stack = createStackNavigator();

function Details() {
return (
  <NavigationContainer independent={true}>
    <Stack.Navigator>
      <Stack.Screen name="Books" component={Books} />  
      <Stack.Screen name="Book01" component={Book1Details} />
      <Stack.Screen name="Book02" component={Book2Details} />
      <Stack.Screen name="Book03" component={Book3Details} />
    </Stack.Navigator>
  </NavigationContainer>
);
}
export default Details;
