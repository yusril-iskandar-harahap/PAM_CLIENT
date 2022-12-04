import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Table, Row, Rows } from 'react-native-table-component';

export default function SuratKeluarPublik({ navigation }) {

  const header = ['heading 1', 'heading 2', 'heading 3']
  const data = [
      ['gfg1', 'gfg2', 'gfg3'],
      ['gfg4', 'gfg5', 'gfg6'],
      ['gfg7', 'gfg8', 'gfg9']

  ]
  return (
    <View style={{marginTop: 200}}>
      <Text style={{ fontSize: 18}}>Tabel Surat Keluar</Text>
      <Table borderStyle={{ borderWidth: 2, 
          borderColor: '#c8e1ff' }}>
          <Row data={header} />
          <Rows data={data} />
      </Table>
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
