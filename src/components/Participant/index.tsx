import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

const Participant = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>Participant</Text>
            <TouchableOpacity style={styles.button} onPress={() => console.log("Remove participant")}>
                <Text style={styles.buttonText}>-</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Participant;