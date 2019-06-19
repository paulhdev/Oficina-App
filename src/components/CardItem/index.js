import React, { Component } from 'react'
import { View, Text, TouchableOpacity, Modal } from 'react-native'

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

                <View style={styles.areaModal}>
                    <Modal style={styles.modal} animationType="slide" visible={this.state.modalVisible}>
                        <View style={styles.modalHeader}>
                            <Text style={styles.modalCustomerName}>Cliente: {this.props.data.customer}</Text>
                            <TouchableOpacity style={styles.btnHideModal} onPress={() => this.hideModal(false)}>
                                <Text style={styles.btnTextModal}>Sair</Text>
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.descriptionText}>{this.props.data.description}</Text>
                    </Modal>
                </View>
            </View>
        )
    }
}