import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    card: {
        marginBottom: 20,
        padding: 10,
        backgroundColor: '#fff',
        shadowColor: '#444',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 5,
        borderRadius: 2,
        elevation: 3
    },
    cardHeader: {
        padding: 5,
        justifyContent: 'center',
    },
    customer: {
        fontSize: 24,
        color: '#444',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    seller: {
        fontSize: 18,
        color: '#848484',
        marginTop: 10,
        marginBottom: 10
    },
    value: {
        fontSize: 20,
        color: '#1cbfb5',
        padding: 5,
        alignItems: 'center',
        height: 40,
        marginBottom: 5,
        fontWeight: 'bold'
    },
    btnDescription: {
        backgroundColor: '#3177bf',
        padding: 5,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnText: {
        fontSize: 20,
        color: '#fff',
        margin: 10,
        fontWeight: 'bold'
    },
    // Modal styled
    areaModal: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modal: {
        height: 60,
        padding: 10
    },
    modalHeader: {
        flexDirection:'row',
        justifyContent: 'space-between',
        height: 25
    },
    modalCustomerName: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#848484'
    },
    btnHideModal: {
        backgroundColor: '#3177bf',
        padding: 5,
        height: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnTextModal: {
        fontSize: 18,
        color: '#fff',
        fontWeight: 'bold'
    },
    descriptionText: {
        padding: 10,
        fontSize: 18,
        color: '#444'
    }
})