import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native'

function Home(props:any) {
    const token = props.route.params.token;
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
        .post(`https://reqres.in
        /api/users?page=1`, 
        token)
        .then((response) => {
          console.log(response.data.token);
            setData(response.data.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])

    return (
        <View>
            <FlatList 
            data={data}
            renderItem={({item}) => <Text>{item.first_name}</Text>}
            keyExtractor={(item) => item.id.toString()}
            />
        </View>
    );
}

export default Home;