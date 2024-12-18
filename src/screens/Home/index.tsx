import { Text, TextInput, View } from 'react-native';
import { styles } from './styles';

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Event Name</Text>
      <Text style={styles.eventDate}>Friday, 18 December 2024.</Text>
      <TextInput style={styles.input} placeholder="Participant Name" placeholderTextColor="#6b6b6b" />
    </View>
  );
}
