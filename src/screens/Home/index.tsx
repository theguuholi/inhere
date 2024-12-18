import { Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';

export default function Home() {
    const participants = [
        "Rodrigo",
        "Gustavo",
        "Lucas",
        "Fernanda",
        "Ana",
        "Maria",
        "João",
        "Pedro",
        "Paulo",
    ]
    function handleParicipantAdd(): void {
        console.log("Add participant");
    }

    const handleParticipantRemove = (name: string): void => {
        console.log(`Remove participant: ${name}`);
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

            {/* <Participant name="Rodrigo" onRemove={handleParticipantRemove} /> quando nao quer passar parametro*/}
            {/* <Participant name="Gustavo" onRemove={() => handleParticipantRemove("Gustavo")} /> */}
            {participants.map(name => (
                <Participant key={name} name={name} onRemove={() => handleParticipantRemove(name)} />
            ))}
        </View>
    );
}
