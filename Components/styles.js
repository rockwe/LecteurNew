import { StyleSheet } from 'react-native';


const styles = StyleSheet.create({
    containerModal: {
        backgroundColor: '#453221',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },

    containerScroll: {
        padding: 22
    },
    modalTitle: {
        textAlign: 'center',
        fontSize: 2.5,
        fontWeight: 'bold',
        color: '#00000f',
        padding: 22,
        paddingBottom: 18
    },
    modalIcon: {
        textAlign: 'center',
        color: '#ffea00',
        top: 15
    },
    containerSection: {
        marginBottom: 15,
        marginRight: 20,
        marginLeft: 20,
    },
    containerRow: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        marginTop: 22,
        paddingHorizontal: 10
    },
    optionSectionTitle: {

        color: "#00000f",
        fontWeight: 'bold',
        width: '100%',
        textAlign: 'center',
    },
    optionTitle: {

        color: '#47525e',
        width: '80%'
    },
    containerButton: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 22
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 100
    },
    buttonClose: {
        backgroundColor: "#47525e",
        borderWidth: 1,
        borderColor: '#47525e',
        flex: 0.67
    },
    buttonSave: {
        backgroundColor: '#025bff',
        borderWidth: 1,
        borderColor: "#47525e",
        flex: 0.67
    },
    buttonText: {

        textAlign: 'center'
    },
    buttonTextSave: {
        color: '#fff',
        fontWeight: 'bold'
    },

    subContainer:{
        margin: 8
    },
    dropDownContainer:{
        borderBottomWidth: 1,
        padding: 8
    },
    dropDownText:{
        fontSize: 20,
        margin: 8
    },
    textInput:{
        borderWidth: 0.5,
        borderRadius: 20,
        paddingHorizontal: 20,
    },

});

export default styles;
