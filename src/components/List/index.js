import React, { Component } from 'react'
import { View, Text, FlatList } from 'react-native'

import axios from 'axios'

import { styles } from './styled'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            list: []
        }
    }

    componentDidMount() {
        axios.get('https://my-json-server.typicode.com/codificar/oficina/proposals')
            .then(res => {
                this.state.loading = false
                this.setState({ list: res.data })
            })
    }

    render() {
        if (this.state.loading) {
            return (
                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <Text style={{ fontSize: 18 }}>Carregando...</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <FlatList data={this.state.list} keyExtractor={list => list.id} renderItem={({ item }) => (
                        <View>
                            <Text>Cliente: {item.customer}</Text>
                            <View>
                                <Text>Vendedor: {item.seller}</Text>
                                <Text>Valor: {item.value}</Text>
                            </View>
                        </View>
                    )} />
                </View>
            )
        }
    }
}