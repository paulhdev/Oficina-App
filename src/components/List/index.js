import React, { Component } from 'react'
import axios from 'axios'
import { View, Text, FlatList } from 'react-native'

import { styles } from './styled'

import CardItem from '../CardItem'

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
                <View style={styles.loadingContainer}>
                    <Text style={styles.loadingText}>Carregando...</Text>
                </View>
            )
        }
        else {
            return (
                <View>
                    <FlatList data={this.state.list} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <CardItem data={item} />} />
                </View>
            )
        }
    }
}