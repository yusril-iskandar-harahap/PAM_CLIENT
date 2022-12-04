import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput } from 'react-native';
import { Alert, VStack, HStack, Text, IconButton, CloseIcon, Stack,Input, Icon, Pressable, Heading, Button, Box } from "native-base";
import { MaterialIcons } from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';
import auth from "../services/auth";


export default function Login({ navigation }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);

  const login = () => {
    setMessage("");
    setLoading(true);
    auth.login(username, password)
      .then((response)=>{
        if (response.message === "Username atau Password Salah") {
          setMessage(response.message);
          setLoading(false);
        } else if (response.token) {
          setLoading(false);
          AsyncStorage.setItem('token', response.token)
          navigation.navigate('HomeStack')
        }
      })
  }

  return (
    <View style={styles.container}>
      <Heading my="4">Login</Heading>
      <Stack space={4} w="100%" alignItems="center">
        <Input onChange={(event) => setUsername(event.target.value)} w={{
        base: "75%",
        md: "25%"
      }} InputLeftElement={<Icon as={<MaterialIcons name="person" />} size={5} ml="2" color="muted.400" />} placeholder="Name" />
        <Input onChange={(event) => setPassword(event.target.value)} w={{
        base: "75%",
        md: "25%"
      }} type={show ? "text" : "password"} InputRightElement={<Pressable onPress={() => setShow(!show)}>
              <Icon as={<MaterialIcons name={show ? "visibility" : "visibility-off"} />} size={5} mr="2" color="muted.400" />
            </Pressable>} placeholder="Password" />
      </Stack> 
      {message !="" &&
      
      <Alert w="70%" status="error" mt="10">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {message}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Alert>
      }
      <Box alignItems="center" my="10">
        <Button px="20" onPress={login}>LOGIN</Button>
      </Box>
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
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "grey",
  },
  inputView: {
   backgroundColor: "gray",
   borderRadius: 30,
   width: "70%",
   height: 45,
   marginBottom: 20,
   alignItems: "center",
 },
 
 TextInput: {
   height: 50,
   flex: 1,
   padding: 10,
   marginLeft: 20,
 },

});
