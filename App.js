import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    SectionList,
    TouchableOpacity
} from 'react-native';

export default function App() {
    const animeSections = [
        {
            title: '🔥 Seven Deadly Sins',
            color: '#ffefd5',
            data: [
                { name: 'Escanor', image: require('./img/Escanor.jpg') },
                { name: 'Meliodas', image: require('./img/Meliodas.jpg') }
            ]
        },
        {
            title: '💥 My Hero Academia',
            color: '#d1f0ff',
            data: [
                { name: 'All Might', image: require('./img/All Might.jpg') },
                { name: 'Endeavor', image: require('./img/Endeavor.jpg') }
            ]
        },
        {
            title: '💫 JoJo’s Bizarre Adventure',
            color: '#f0d1ff',
            data: [
                { name: 'Jotaro', image: require('./img/Jotaro & Star platinum.jpg') },
                { name: 'Joseph', image: require('./img/Joseph Joestar 《JoJo Wallpaper》.jpg') }
            ]
        }
    ];

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Anime List</Text>

            <SectionList
                sections={animeSections}
                keyExtractor={(item, index) => item.name + index}
                renderSectionHeader={({ section }) => (
                    <View style={[styles.header, { backgroundColor: section.color }]}>
                        <Text style={[styles.headerText, { color: '#ff4500' }]}>{section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity style={[styles.itemRow, { backgroundColor: '#fff0f5' }]}>
                        <Text style={[styles.itemName, { color: '#4b0082' }]}>{item.name}</Text>
                        <Image source={item.image} style={styles.itemImage} />
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#f0f8ff'
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginBottom: 15,
        color: '#ff69b4'
    },
    header: {
        padding: 12,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 5
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    itemRow: {
        flexDirection: 'row',
        padding: 15,
        marginBottom: 8,
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 12,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 5
    },
    itemName: {
        fontSize: 18,
        fontWeight: '700'
    },
    itemImage: {
        width: 110,
        height: 160,
        resizeMode: 'cover',
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#ff69b4'
    }
});
