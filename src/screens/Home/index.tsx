import { Alert, FlatList, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Participant from '../../components/Participant';
import { useState } from 'react';

export default function Home() {
    // const participants = [
    //     "Rodrigo",
    //     "Gustavo",
    //     "Lucas",
    //     "Fernanda",
    //     "Ana",
    //     "Maria",
    //     "João",
    //     "Pedro",
    //     "Paulo",
    // ]
    const [participants, setParticipants] = useState<string[]>([]);
    const [newParticipant, setNewParticipant] = useState<string>("");

    const handleParicipantAdd = (): void => {
        if (participants.includes(newParticipant)) {
            return Alert.alert("Participant already added", "This participant is already added to the event.");
        }
        setParticipants([...participants, newParticipant]);
        setNewParticipant("");
        // participants.push("aasdf");
        // console.log(participants);
    }

    const handleParticipantRemove = (name: string): void => {
        Alert.alert("Remove", `Remove participant: ${name}?`, [
            {
                text: "Cancel",
            },
            {
                text: "Remove",
                onPress: () => {
                    Alert.alert("Participant removed");
                    setParticipants(prevState => prevState.filter(participant => participant !== name));
                }
            }
        ]);
    }

    // const handleStates = (value: string): void => {
    //     setNewParticipant(value);
    //     console.log(newParticipant);
    // }

    return (
        <View style={styles.container}>
            <Text style={styles.eventName}>Event Name</Text>
            <Text style={styles.eventDate}>Friday, 18 December 2024.</Text>
            <View style={styles.form}>
                <TextInput
                    style={styles.input}
                    placeholder="Participant Name"
                    placeholderTextColor="#6b6b6b"
                    value={newParticipant}
                    // onChangeText={handleStates} 
                    onChangeText={e => setNewParticipant(e)} 
                    />
                <TouchableOpacity style={styles.button} onPress={handleParicipantAdd}>
                    <Text style={styles.buttonText}>+</Text>
                </TouchableOpacity>
            </View>

            {/* <Participant name="Rodrigo" onRemove={handleParticipantRemove} /> quando nao quer passar parametro*/}
            {/* <Participant name="Gustavo" onRemove={() => handleParticipantRemove("Gustavo")} /> */}

            <FlatList
                ListEmptyComponent={<Text style={{ color: "#fff" }}>No participants</Text>}
                showsVerticalScrollIndicator={false}
                data={participants}
                keyExtractor={item => item}
                renderItem={({ item }) => (
                    <Participant name={item} onRemove={() => handleParticipantRemove(item)} />
                )} />
            {/* <ScrollView showsVerticalScrollIndicator={false}> */}
            {/* {participants.map(name => (
                    <Participant key={name} name={name} onRemove={() => handleParticipantRemove(name)} />
                ))} */}
            {/* </ScrollView> */}

        </View>
    );
}
