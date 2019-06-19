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
    modalPosition: {
        flex: 1,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        width: '100%',
        height: 200,
        padding: 10,
        backgroundColor: '#3177bf',
        borderRadius: 2,
        shadowColor: '#333',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 5
    },
    modalHeader: {
        flexDirection:'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    modalCustomerName: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#ddd'
    },
    TextInfoDescription: {
        fontWeight: 'bold',
        color: '#fff',
        fontSize: 18,
        margin: 5,
        marginTop: 30
    },
    descriptionText: {
        fontSize: 20,
        color: '#fff'
    }
})