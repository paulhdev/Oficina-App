import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome5'

import { styles } from './styled'

export default class CardItem extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false
        }

        this.showModal = this.showModal.bind(this)
        this.hideModal
    }

    showModal() {
        this.setState({ modalVisible: true })
    }

    hideModal(visible) {
        this.setState({ modalVisible: visible })
    }

    render() {
        return (
            <View style={styles.card}>
                <View style={styles.cardHeader}>
                    <Text style={styles.customer}>Cliente: {this.props.data.customer}</Text>
                    <Text style={styles.seller}>Vendedor: {this.props.data.seller}</Text>
                </View>
                <Text style={styles.value}>Valor: {this.props.data.value}</Text>
                <TouchableOpacity onPress={this.showModal} style={styles.btnDescription}>
                    <Text style={styles.btnText}>Descrição</Text>
                </TouchableOpacity>

                <Modal transparent={true} animationType="slide" visible={this.state.modalVisible}>
                    <View style={styles.modalPosition}>
                        <View style={styles.modal}>
                            <View style={styles.modalHeader}>
                                <Text style={styles.modalCustomerName}>Cliente: {this.props.data.customer}</Text>
                                <TouchableOpacity onPress={() => this.hideModal(false)}>
                                    <Icon name="times-circle" size={30} color="#ddd" />
                                </TouchableOpacity>
                            </View>
                            <Text style={styles.TextInfoDescription}>Serviço realizado:</Text>
                            <Text style={styles.descriptionText}> {this.props.data.description}</Text>
                        </View>
                    </View>
                </Modal>
            </View>
        )
    }
}