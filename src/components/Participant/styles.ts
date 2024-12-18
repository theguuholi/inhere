import { StyleSheet } from 'react-native';
export const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: "#1f1e25",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 16,
    },
    name: {
        color: "#fdfcfe",
        fontSize: 16,
        marginLeft: 16,
        flex: 1,
    },
    buttonText: {
        color: "#fdfcfe",
        fontSize: 24,
    },
    button: {
        width: 56,
        height: 56,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#e23c44"
    },
});
