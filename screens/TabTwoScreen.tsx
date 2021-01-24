import * as React from 'react';
import { StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fun Facts:</Text>
      <Text style={{fontWeight: "bold"}}>This Is Where You Can Find Great Facts About Some Of Our Dino Friends!</Text>
      <Text style={styles.title}>Bearded Dragons:</Text>  
      <Text style={{fontWeight: "bold"}}>Bearded dragons have become extremely popular pets to have.</Text>
      <Text style={{fontWeight: "bold"}}> They are very new on the pet scene and have only become popular to have as a pet in the last 20 years. </Text> 
      <Text style={{fontWeight: "bold"}}>Bearded dragons get their name from their ability to make their throat look like a beard by puffing it out. </Text> 
      <Text style={{fontWeight: "bold"}}> They come from South-East Australia and live in semi-desert environments.</Text>  
      <Text style={{fontWeight: "bold"}}>Bearded dragons are very inquisitive creatures They have up to 24 eggs at a time in one clutch, which is a collection of eggs.  </Text>  
      <Text style={{fontWeight: "bold"}}>They can lay up to nine clutches a year.They will often lose their teeth in the wild,due to tearing into prey.  </Text>  
      <Text style={{fontWeight: "bold"}}> However, their teeth can grow back! </Text> 
      <Text style={styles.title}>Crested Geckos:</Text>  
      <Text style={{fontWeight: "bold"}}>Crested geckos are among the popular pets that you can keep at home. </Text>
      <Text style={{fontWeight: "bold"}}>You will stumble on the pictures of these cuties on social media. </Text>
      <Text style={{fontWeight: "bold"}}>One of the reasons why crested geckos are getting more popular as a pet is because they make a good pet.  </Text>
      <Text style={{fontWeight: "bold"}}> However, they were thought to be extinct before they were rediscovered,and since then, they have become a major household name among reptiles’ lovers.</Text>
      <Text style={{fontWeight: "bold"}}> My crestie -common nickname for these dolls- is a very sweet boy and will climb on-to my hand just to play a game of hand hop. </Text>
      <Text style={{fontWeight: "bold"}}> OH!They are amazing jumpers and love to go for long hair.</Text>
      <Text style={styles.title}>Yellow Hourglass Tree Frogs:</Text>  
      <Text style={{fontWeight: "bold"}}>These guys get their name from the yellow pattern on it's back in the shape of an hourglass! </Text>
      <Text style={{fontWeight: "bold"}}> They live in North and South America, in areas where it is very warm and tropical. </Text>
      <Text style={{fontWeight: "bold"}}>These guys are more of the look don't touch types.  </Text>
      <Text style={{fontWeight: "bold"}}>They have a protective coating that can make you sick.  </Text> 
      <Text style={{fontWeight: "bold"}}>However, what they lack in hold-ability they make up for with entertainment.  </Text>
      <Text style={{fontWeight: "bold"}}>  They are really active and like the 
      KING OF ROCK'n'ROLL They SING!!! Rainy days brings this out in spades!</Text>
    <Text style={styles.title}>Here We Are At The End!</Text>  
    <Text style={styles.title}>Roar On Dino Keepers!</Text>  
    <Text style={styles.title}></Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="/screens/TabTwoScreen.tsx" />
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
