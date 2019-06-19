import React, { Component } from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'

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
                    <FlatList data={this.state.list} keyExtractor={item => item.id.toString()} renderItem={({ item }) => (
                        <View style={styles.card}>
                            <View style={styles.cardHeader}>
                                <Text style={styles.customer}>Cliente: {item.customer}</Text>
                                <Text style={styles.seller}>Vendedor: {item.seller}</Text>
                            </View>
                            <View style={styles.cardBody}>
                                <Text style={styles.value}>Valor: {item.value}</Text>
                                <TouchableOpacity onPress={() => { }} style={styles.btnDescription}>
                                    <Text style={styles.btnText}>Descrição</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )} />
                </View>
            )
        }
    }
}