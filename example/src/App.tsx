// import MathJax from '@ibeginnernoob/react-native-katex';
import { Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={{ backgroundColor: 'white', flex: 1, marginTop: 100 }}>
      <Text style={{ fontSize: 40 }}>Demo App</Text>
      {/* <MathJax
        content="This is me using latex inside webshells $$ \frac{1}{2} $$"
        customStyles={{
          fontSize: 50,
          backgroundColor: 'red',
          mathBgColor: 'blue',
          textColor: 'green',
        }}
      /> */}
    </View>
  );
}
