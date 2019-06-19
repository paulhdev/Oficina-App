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
    cardBody: {
        flexDirection: 'row',
        padding: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
        height: 40,
        marginTop: 10,
        marginBottom: 10
    },
    customer: {
        fontSize: 20,
        color: '#444',
        borderBottomWidth: 1,
        borderBottomColor: '#ddd'
    },
    seller: {
        fontSize: 18,
        color: '#488aff',
        marginTop: 10,
        marginBottom: 10
    },
    value: {
        fontSize: 18,
        color: 'red',
        fontWeight: 'bold'
    },
    btnDescription: {
        backgroundColor: '#488aff',
        padding: 5,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 5
    },
    btnText: {
        color: '#fff',
        margin: 10,
        fontWeight: 'bold'
    }
})