import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

import { styles } from './styled'

export default class CardItem extends Component {
    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.customer}>Cliente: {this.props.data.customer}</Text>
                    <Text style={styles.seller}>Vendedor: {this.props.data.seller}</Text>
                </View>
                <View style={styles.cardBody}>
                    <Text style={styles.value}>Valor: {this.props.data.value}</Text>
                    <TouchableOpacity onPress={() => { }} style={styles.btnDescription}>
                        <Text style={styles.btnText}>Descrição</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}