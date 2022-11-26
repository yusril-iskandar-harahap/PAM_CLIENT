import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';


export default function Home({ navigation }) {
  
  const dashboard = () => {
    navigation.navigate('Login')
  }

  const suratMasuk = () => {
    navigation.navigate('SuratMasukPublik')
  }

  const suratKeluar = () => {
    navigation.navigate('SuratKeluarPublik')
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={dashboard}
      >
        <Text>Dashboard Admin</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={suratMasuk}
      >
        <Text>Surat Masuk</Text>
      </TouchableOpacity> 

      <TouchableOpacity
        style={styles.button}
        onPress={suratKeluar}
      >
        <Text>Surat Keluar</Text>
      </TouchableOpacity> 

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
  button: {
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10
  },
});
