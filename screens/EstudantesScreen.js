import React, { useContext, useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import { AuthContext } from '../contexts/AuthContext.js'; // Certifique-se de que o AuthContext está correto
import { ClassContext } from '../contexts/ClassContext.js';
import EstudanteElemento from "../components/EstudanteElemento";
import MenuInferior from '../components/MenuInferior.js';
import SearchContainer from "../components/SearchContainer";
import TopFlex from "../components/TopFlex";
import DefaultAvatar from "../assets/defaultAvatar.jsx";

function Estudantes() {
    const { authData } = useContext(AuthContext);
    const { CPF, nome, token } = authData; // Pega o token aqui
    const { classData } = useContext(ClassContext);
    const { id } = classData;
    const [estudantes, setEstudantes] = useState([]);

    useEffect(() => {
        const fetchEstudantes = async () => {
            try {
                const response = await fetch(`http://192.168.1.12:4000/students/${id}`, {
                    method: 'GET',
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                });
                const data = await response.json();
                if (Array.isArray(data.users)) {
                    // Ordena os estudantes: você em primeiro, os outros em ordem alfabética
                    const estudantesOrdenados = data.users.sort((a, b) => {
                        if (a.name === nome) return -1; // Você no topo
                        if (b.name === nome) return 1;  // Você no topo
                        return a.name.localeCompare(b.name); // Ordem alfabética
                    });
                    setEstudantes(estudantesOrdenados);
                } else {
                    console.warn('A chave "users" não contém um array válido.');
                    setEstudantes([]);
                }
            } catch (error) {
                console.error('Erro ao buscar os dados dos estudantes:', error);
            }
        };

        fetchEstudantes();
    }, [id, token, nome]); // Adiciona nome como dependência

    return (
        <SafeAreaView style={styles.safeArea}>
            <TopFlex titulo='Estudantes'/>
            <SearchContainer />
            <ScrollView style={styles.scrollView}>
                {estudantes.length > 0 ? (
                    estudantes.map((estudante) => (
                        <EstudanteElemento 
                            key={estudante.id} 
                            fotoEstudante={estudante.avatarUrl || DefaultAvatar} // Usar uma imagem padrão
                            nomeEstudante={estudante.name} 
                        />
                    ))
                ) : (
                    <EstudanteElemento
                        fotoEstudante={DefaultAvatar} // Usar imagem padrão
                        nomeEstudante="Nenhum estudante encontrado"
                    />
                )}
            </ScrollView>
            <MenuInferior overviewProp={false} calendarProp={true}/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#fff',
    },
    scrollView: {
        paddingHorizontal: 10,
        paddingVertical: 10,
    },
});

export default Estudantes;
