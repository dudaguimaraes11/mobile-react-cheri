import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
    SafeAreaView,
} from 'react-native';

const produtos = [
    {
        id: '1',
        nome: 'Sleepy Girl Rhode Blush',
        preco: 'R$169,90',
        imagem: require('./assets/blush.png'),
    },
    {
        id: '2',
        nome: 'Lip Tint Rhode Ribbon',
        preco: 'R$129,90',
        imagem: require('./assets/lipgloss.png'),
    },
    {
        id: '3',
        nome: 'Peptide Glazing Fluid',
        preco: 'R$210,90',
        imagem: require('./assets/tonico.png'),
    },
    {
        id: '4',
        nome: 'Lip Treatment',
        preco: 'R$132,30',
        imagem: require('./assets/liptreatment.png'),
    },
    {
        id: '5',
        nome: 'Lip Liner Lounge',
        preco: 'R$119,90',
        imagem: require('./assets/lapis.png'),
    },
    {
        id: '6',
        nome: 'Pineapple Refresh',
        preco: 'R$152,90',
        imagem: require('./assets/refresh.png'),
    },
];

export default function App() {
    const comprarProduto = (nome) => {
        Alert.alert('Produto selecionado', nome);
    };

    const renderItem = ({ item }) => (
        <View style={styles.itemContainer}>
            <View style={styles.card}>
                <Image source={item.imagem} style={styles.imagem} />

                <View style={styles.textoContainer}>
                    <Text style={styles.nome} numberOfLines={2}>
                        {item.nome}
                    </Text>

                    <Text style={styles.preco}>{item.preco}</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.botao} onPress={() => comprarProduto(item.nome)}>
                <Text style={styles.textoBotao}>Comprar agora</Text>
            </TouchableOpacity>
        </View>
    );

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={produtos}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                columnWrapperStyle={styles.row}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.container}
                ListHeaderComponent={
                    <View style={styles.header}>
                        <Text style={styles.titulo}>🍸 CHÉRIE 🍸</Text>
                    </View>
                }
                ListFooterComponent={
                    <View style={styles.banner}>
                        <Text style={styles.bannerTitulo}>THE PEPTIDE LIP TINT</Text>

                        <Image source={require('./assets/kit.png')} style={styles.bannerImagem} />
                    </View>
                }
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#e6d5d5',
    },

    container: {
        padding: 12,
    },

    header: {
        backgroundColor: '#7a2f3c',
        borderRadius: 18,
        paddingVertical: 16,
        marginBottom: 18,
        justifyContent: 'center',
        alignItems: 'center',
    },

    titulo: {
        color: '#fff',
        fontSize: 28,
        fontWeight: '900',
        letterSpacing: 2,
        textAlign: 'center',
    },

    row: {
        justifyContent: 'space-between',
    },

    itemContainer: {
        width: '48.5%',
        marginBottom: 18,
    },

    card: {
        backgroundColor: '#e7bcc4',
        borderRadius: 22,
        paddingVertical: 16,
        paddingHorizontal: 12,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c99aa3',
        minHeight: 220,
    },

    imagem: {
        width: 110,
        height: 110,
        resizeMode: 'contain',
        marginBottom: 10,
    },

    textoContainer: {
        width: '100%',
        alignItems: 'center',
    },

    nome: {
        textAlign: 'center',
        fontSize: 15,
        fontWeight: '600',
        color: '#2d2d2d',
        minHeight: 38,
        paddingHorizontal: 4,
    },

    preco: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: '#7a2f3c',
        marginTop: 4,
    },

    botao: {
        backgroundColor: '#7a2f3c',
        borderRadius: 24,
        height: 46,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
    },

    textoBotao: {
        color: '#fff',
        fontSize: 13,
        fontWeight: '700',
    },

    banner: {
        backgroundColor: '#e7bcc4',
        borderRadius: 22,
        padding: 16,
        marginTop: 6,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#c99aa3',
    },

    bannerTitulo: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '800',
        color: '#7a2f3c',
        marginBottom: 8,
    },

    bannerImagem: {
        width: '100%',
        height: 180,
        resizeMode: 'contain',
    },
}); 
