import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function SuratMasukPublik({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Ini Surat Masuk Publik</Text> 
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
