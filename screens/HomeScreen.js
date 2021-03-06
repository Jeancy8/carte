import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions
} from 'react-native';
import {
  Icon,
  Divider,
  ListItem,
} from 'react-native-elements'
import SearchInput, { createFilter } from 'react-native-search-filter';
import { MonoText } from '../components/StyledText';
const KEYS_TO_FILTERS = ['title'];
import { Avatar, Button, Card, TextInput, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

export default class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ''
    }
  }

  searchUpdated(term) {
    this.setState({ searchTerm: term })
  }

  render() {
    const theme = {
      ...DefaultTheme,
      roundness: 2,
      colors: {
        ...DefaultTheme.colors,
        primary: '#3498db',
        accent: '#f1c40f',
      },
      dark: true,
    };
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
      <PaperProvider theme={theme}>
      <View style={styles.container}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <View style={styles.welcomeContainer}>
          <Text>Jeux de carte</Text>
        </View>
        <View style={{flex:1, alignItems: 'center'}}>
        <Avatar.Image
            width={120}
            height={120}
            rounded
            source={{
              uri:
                'https://i0.wp.com/bonplangratos.fr/wp-content/media/4-as-jeu-de-cartes.jpg?fit=710%2C473&ssl=1',
            }}
        />
        </View>
        <Card>
          <Card.Actions>
          <View style={styles.container}>
          <Text style={styles.developmentModeText}>Bienvenue dans le jeux de Carte</Text>
          <TextInput
            label='Taper votre pseudo'
            value={this.state.text}
            onChangeText={text => this.setState({ text })}
            />
        </View>
          </Card.Actions>
        </Card>
        <View>
          <Button
            onPress={() => navigate('Search', {pseudo: this.state.text})}
          >
            Continuer
          </Button>
        </View>
      </ScrollView>
    </View>
    </PaperProvider>
    )
  }
}

HomeScreen.navigationOptions = {
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
