import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';


export default function TabOneScreen() {
  return (
    <View style={styles.container}>
      
    <Text style={styles.title}> Welcome To Dino In My Home!</Text> 
    <Text style={styles.title}> </Text>
    <Text style={styles.title}>Have you ever wanted your own Dinosaur?</Text> 
    <Text style={{fontWeight: "bold"}}>Well, In Todays Day And Age You Would Have A Hard Time Finding One... </Text>
    <Text style={styles.title}>Wait!!! </Text> 
    <Text style={styles.title}>Don't Stomp Away Yet!!! </Text>
    <Text style={{fontWeight: "bold"}}> No, Sadly You Wont See A T-rex Walking Around In Your Back Yard. </Text>
    <Text style={{fontWeight: "bold"}}> Luckily, We Have Reptiles And Amphibians!</Text>
    <Text style={{fontWeight: "bold"}}> Here I Will Tell You All The Wonderful Things About Our "Dino" Friends!</Text>
    <Text style={styles.title}>But First!</Text>  
    <Text style={{fontWeight: "bold"}}> A Note To Parents And Possible Dino Parents!</Text>
    <Text style={{fontWeight: "bold"}}>Let Me Start By Saying I am Not A Vet, </Text>
    <Text style={{fontWeight: "bold"}}>  Sales Person, Or In Any Way Shape Or Form An Expert!</Text>
    <Text style={{fontWeight: "bold"}}> I Am Here To Only Introduce People To These Wonderful Creatures.</Text>
    <Text style={{fontWeight: "bold"}}> I Will Add Links To Thing I Use With My Own Pets. I Am Not Sponsored.</Text>
    <Text style={styles.title}>The Links: </Text>  
    <Text style={{fontWeight: "bold"}}>  https://www.reptilebasics.com/arcadia-UVB</Text>  
    <Text style={{fontWeight: "bold"}}>   https://www.pangeareptile.com/store/crested-gecko-diet.html</Text>  
    <Text style={{fontWeight: "bold"}}> https://flukerfarms.com/</Text>  
    <Text style={{fontWeight: "bold"}}> https://www.zenhabitats.com/ </Text>
    <Text style={styles.title}>If You Have A sick Pet Please See Your Local Exotic Vet!</Text> 
    <Text style={{fontWeight: "bold"}}>Head Over To Tab Two For Fun Facts!</Text> 
    <Text style={{fontWeight: "bold"}}> </Text>
    <View style={styles.separator} lightColor="#50E3C2" darkColor="rgb(80,227,194)" />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
