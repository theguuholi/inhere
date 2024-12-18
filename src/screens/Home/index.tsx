import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home() {
    function handleParicipantAdd(): void {
        console.log("Add participant");
    }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Event Name</Text>
            <Text style={styles.eventDate}>Friday, 18 December 2024.</Text>
            <View style={styles.form}>
                <TextInput style={styles.input} placeholder="Participant Name" placeholderTextColor="#6b6b6b" />
                <TouchableOpacity style={styles.button} onPress={handleParicipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            <Participant />
            <Participant />
            <Participant />
        </View>
    );
}
