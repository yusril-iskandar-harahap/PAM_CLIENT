import React, { useState,useEffect } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity, BackHandler } from 'react-native';
import { DataTable, Appbar, Searchbar, Card, Title, Paragraph, TouchableRipple } from 'react-native-paper';
import suratServices from "../services/surat";

const formatTanggal = (tanggal) => {
   const event = new Date(tanggal);
   const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
   return event.toLocaleDateString('id-ID', options);
}

export default function SuratMasukPublik({ navigation }) {

  const [surat, setSurat] = useState();
  const [searchQuery, setSearchQuery] = useState('');
  const [showSerch, setShowSerch] = useState(false);

  const serchToggle = () => {
    setShowSerch(showSerch ? false : true);
  };
  const onChangeSearch = query => {setSearchQuery(query); console.log(query)};

  useEffect(() => {
    suratServices.getDataSuratMasuk()
      .then((response)=>{
        setSurat(response.data);
      })

  }, []);

  console.log(surat)
  return (
    <>
      <Appbar.Header>
        <Appbar.BackAction onPress={() => {navigation.goBack()}} />
        <Appbar.Content title="Surat Masuk" />
        <Appbar.Action icon="filter" onPress={() => {}} />
        <Appbar.Action icon="magnify" onPress={serchToggle} />
      </Appbar.Header>
      {
        showSerch &&
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      }
      <ScrollView>

        { surat ?
          surat.map((surat, index)=>
            <TouchableRipple
              key={index} onPress={()=>{console.log("berhasil")}}
              rippleColor="rgba(0, 0, 0, .32)"
            >
              <Card>
                <Card.Content>
                  <Title>Card title</Title>
                  <Paragraph>{formatTanggal(surat.tanggal_masuk)}</Paragraph>
                  <Paragraph>{surat.pengirim}</Paragraph>
                  <Paragraph>{surat.perihal}</Paragraph>
                </Card.Content>
              </Card>
            </TouchableRipple>
          )
          :
          null
        }
      </ScrollView>
    </>
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
