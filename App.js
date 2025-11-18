import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, SectionList, Button } from 'react-native';

export default function App() {
    const sections = [
        {
            title: '🔥 FIRE',
            color: '#ff9c7a',
            icon: '🔥',
            data: [
                {
                    name: 'Arcanine',
                    image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/scarlet-violet/en-us/SV01_EN_224-2x.png'
                },
                {
                    name: 'Elscue',
                    image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_42-2x.png'
                }
            ]
        },
        {
            title: '⚡ ELECTRIC',
            color: '#fff16b',
            icon: '⚡',
            data: [
                {
                    name: 'Pikachu',
                    image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/surging-sparks/en-us/SV08_EN_247-2x.png'
                },
                {
                    name: 'Tyranitar',
                    image: 'https://dz3we2x72f7ol.cloudfront.net/expansions/obsidian-flames/en-us/SV03_EN_211-2x.png'
                }
            ]
        }
    ];

    return (
        <View style={styles.container}>
            {/* A) ADD BUTTON */}
            <View style={styles.addButton}>
                <Button title="ADD POKEMON" onPress={() => {}} />
            </View>

            {/* LIST */}
            <SectionList
                sections={sections}
                keyExtractor={(item, index) => item.name + index}
                renderSectionHeader={({ section }) => (
                    <View style={[styles.header, { backgroundColor: section.color }]}>
                        <Text style={styles.headerText}>{section.icon} {section.title}</Text>
                    </View>
                )}
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.cardRow}>
                            <Text style={styles.name}>{item.name}</Text>

                            <Image
                                source={{ uri: item.image }}
                                style={styles.cardImage}
                            />
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: 40,
    },
    addButton: {
        padding: 10,
    },
    header: {
        padding: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 18,
    },
    cardRow: {
        flexDirection: 'row',
        padding: 15,
        backgroundColor: '#dcd6f7',
        marginBottom: 2,
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    name: {
        fontSize: 18,
        fontWeight: '600',
    },
    cardImage: {
        width: 110,
        height: 160,
        resizeMode: 'contain'
    }
});
