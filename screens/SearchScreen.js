import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  Alert,
  View,
  Modal
} from 'react-native';
import {
  Avatar,
} from 'react-native-elements'
import SearchInput, { createFilter } from 'react-native-search-filter';
const KEYS_TO_FILTERS = ['title'];
import { Chip, Button } from 'react-native-paper';

export default class SearchScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: '',
      modalVisible: false
    }
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {

    const {navigate} = this.props.navigation;

    const list = [
      {
        id: 1,
        title: 'partie 1',
      },
      {
        id: 2,
        title: 'partie 2',
      },
      {
        id: 3,
        title: 'partie 3',
      },
      {
        id: 4,
        title: 'partie 4',
      },
    ]

    const listFilter = list.filter(createFilter(this.state.searchTerm, KEYS_TO_FILTERS)) 
    return (
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text>Jeux de carte</Text>
        </View>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Hello World!</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>
        <View>
          <Avatar
          style={{height: 170}}
            size="xlarge"
            source={{
              uri:
                'https://i0.wp.com/bonplangratos.fr/wp-content/media/4-as-jeu-de-cartes.jpg?fit=710%2C473&ssl=1',
            }}
          />
        </View>
        <View style={styles.container}>
        <Button
          onPress={() => {
          this.setModalVisible(true);
        }}>
          Créer une partie
        </Button>
        <SearchInput 
          onChangeText={(term) => { this.searchUpdated(term) }} 
          style={styles.searchInput}
          placeholder="Rechercher une partie"
          />
        <ScrollView>
          {listFilter.map(item => {
            return (
              <TouchableOpacity onPress={()=>alert(item.title)} key={item.id} style={styles.listItem}>
                <View>
                <Chip onPress={() => console.log('Pressed')}>{item.title}</Chip>
                </View>
              </TouchableOpacity>
            )
          })}
        </ScrollView>
      </View>
        <View>
          <Button
           onPress={() => navigate('Game')}
          >
            Jouer
          </Button>
        </View>
        <View>
          <Button
            onPress={() => navigate('Home')}
          >
            Retour
          </Button>
        </View>
      </ScrollView>
    </View>
    )
  }
}

SearchScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {
    const learnMoreButton = (
      <Text onPress={handleLearnMorePress} style={styles.helpLinkText}>
        Learn more
      </Text>
    );

    return (
      <Text style={styles.developmentModeText}>
        Development mode is enabled: your app will be slower but you can use
        useful development tools. {learnMoreButton}
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        You are not in development mode: your app will run at full speed.
      </Text>
    );
  }
}

function handleLearnMorePress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/development-mode/'
  );
}

function handleHelpPress() {
  WebBrowser.openBrowserAsync(
    'https://docs.expo.io/versions/latest/workflow/up-and-running/#cant-see-your-changes'
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: '#fff',
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
  listView : {
    display: 'flex',
    bottom: 0,
  },
  listItem:{
    borderBottomWidth: 0.5,
    borderColor: 'rgba(0,0,0,0.3)',
    padding: 10
  },
  searchInput:{
    padding: 10,
    borderColor: '#CCC',
    borderWidth: 1
  }
});
