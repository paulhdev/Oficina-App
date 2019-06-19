import React, { Component } from 'react'
import axios from 'axios'
import { View, FlatList } from 'react-native'
import ShimmerPlaceHolder from 'react-native-shimmer-placeholder'

import CardItem from '../CardItem'

export default class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // loading: Usado para verificar se o request foi realizado e assim mostrar ou não a animação de loading
            loading: false,
            list: []
        }
    }

    componentDidMount() {
        // Consumindo a API com axios e armazenando o valor das informações no state list
        axios.get('https://my-json-server.typicode.com/codificar/oficina/proposals')
            .then(res => {
                this.state.loading = true
                this.setState({ list: res.data })
            })
    }

    render() {
        return (
            <ShimmerPlaceHolder style={{ height: 50, width: '100%' }} autoRun={true} visible={this.state.loading}>
                <View>
                    <FlatList data={this.state.list} keyExtractor={item => item.id.toString()} renderItem={({ item }) => <CardItem data={item} />} />
                </View>
            </ShimmerPlaceHolder>
        )
    }
}