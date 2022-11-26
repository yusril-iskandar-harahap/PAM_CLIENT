import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function SuratKeluarPublik({ navigation }) {

  return (
    <View style={styles.container}>
      <Text>Ini Surat Keluar Publik</Text> 
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
