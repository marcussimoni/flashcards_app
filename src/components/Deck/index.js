import React from 'react'


const Deck = (props) => {
    const [decks, setdecks] = useState([])
    
    useEffect(() => {
    DeckService.findAll().then(response => {
        response.json().then(json => setdecks(json))      
    }, error => {
        alert('erro')
    })
    }, [])

    const deckSelectHandler = (item) => {
        alert(item.name)
    }

    const selectAction = () => {
        alert('Long press ...')
    }

    return (
        <ScrollView>
            <Text>Test react native app</Text>
            <StatusBar barStyle="dark-content" />
            <FlatList
                data={decks}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item, index}) => {
                    return (
                    <TouchableOpacity onPress={() => deckSelectHandler(item)} onLongPress={() => selectAction()}>
                        <Fragment key={index}>   
                            <Text>{item.name}</Text>
                            <Text>{item.description}</Text>
                        </Fragment>
                    </TouchableOpacity>
                    )
                }
                }
            />
        </ScrollView>
    )
}