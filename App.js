import React from 'react';
import {
    View,
    Text,
    FlatList,
    Image,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
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

    const renderItem = ({ item }) => {
        const caminhoImagem = typeof item.imagem === 'string' ? { uri: item.imagem } : item.imagem;

        return (
            <View style={styles.itemContainer}>
                {/* O card agora expande dinamicamente envolvendo todo o conteúdo */}
                <View style={styles.card}>
                    <Image source={caminhoImagem} style={styles.imagem} />

                    {/* Agrupamos os textos em uma View para melhor controle de espaçamento interno */}
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
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#e6d5d5' }}>
            <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
                <View style={styles.header}>
                    <Text style={styles.titulo}>🍸 CHÉRIE{'\n'}CHÉRIE 🍸</Text>
                </View>

                <FlatList
                    data={produtos}
                    renderItem={renderItem}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    columnWrapperStyle={styles.row}
                    scrollEnabled={false}
                />

                <View style={styles.banner}>
                    <Text style={styles.bannerTitulo}>THE PEPTIDE LIPTINT</Text>
                    <Image source={require('./assets/kit.png')} style={styles.bannerImagem} />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e6d5d5',
        paddingHorizontal: 12,
        paddingTop: 20,
    },

    header: {
        backgroundColor: '#6b2d36',
        paddingVertical: 15,
        borderRadius: 8,
        marginBottom: 20,
        alignItems: 'center',
    },

    titulo: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    row: {
        justifyContent: 'space-between',
    },

    itemContainer: {
        width: '48%',
        marginBottom: 20,
    },

    card: {
        backgroundColor: '#f1c1c7',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#6b2d36',
        padding: 12,
        // CORREÇÃO: Removemos o height fixo e deixamos o flexGrow segurar as pontas
        flexGrow: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    imagem: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 10,
    },

    textoContainer: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-end',
        flexGrow: 1,
    },

    nome: {
        textAlign: 'center',
        fontSize: 14,
        color: '#333',
        fontWeight: '500',
        marginBottom: 4,
    },

    preco: {
        textAlign: 'center',
        fontSize: 13,
        fontWeight: 'bold',
        color: '#6b2d36',
        marginTop: 'auto', // Empurra o preço sempre para o final da caixinha de textos
    },

    botao: {
        backgroundColor: '#6b2d36',
        paddingVertical: 10,
        borderRadius: 20,
        marginTop: 8,
    },

    textoBotao: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 11,
    },

    banner: {
        backgroundColor: '#f1c1c7',
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#6b2d36',
        padding: 12,
        marginBottom: 45,
        marginTop: 15,
    },

    bannerTitulo: {
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold',
        color: '#6b2d36',
    },

    bannerImagem: {
        width: '100%',
        height: 160,
        borderRadius: 10,
        resizeMode: 'contain',
    },
});
