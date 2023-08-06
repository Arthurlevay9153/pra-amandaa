import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

let customFonts = {
  "Bubblegum-Sans": require("../assets/fonts/BubblegumSans-Regular.ttf")
};

export default class StoryCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fontsLoaded: false
    };
  }

  async _loadFontsAsync() {
    await Font.loadAsync(customFonts);
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this._loadFontsAsync();
  }

  render() {
    if (this.state.fontsLoaded) {
      SplashScreen.hideAsync();
      return (
        <TouchableOpacity style={styles.container} onPress = {() => {this.props.navigation.navigate ('StoryScreen',{story:this.props.story})}}> {/*renderizar o post/card & e navegar entre as telas*/}
          <View style={styles.cardContainer}> {/*renderizar o style 'cardContainer' no post/card*/}

            <Image
              source={require("../assets/story_image_1.png")} 
              style={styles.storyImage} 
            ></Image> {/*renderizar o style 'storyImage' no post/card || renderizar a imagem do card/post*/} 

            <View style={styles.titleContainer}> {/*renderizar o style 'titleContainer' no post/card*/}
              <Text style={styles.storyTitleText}> {/*renderizar o style 'storyTitleText' no post/card*/}
                {this.props.story.title} {/*renderizar o texto presente na aba 'temp.json' no post/card*/}
              </Text>
              <Text style={styles.storyAuthorText}> {/*renderizar o style 'storyAuthorText' no post/card*/}
                {this.props.story.author} {/*renderizar o texto presente na aba 'temp.json' no post/card*/}
              </Text>
              <Text style={styles.descriptionText}> {/*renderizar o style 'descriptionText' no post/card*/}
                {this.props.story.description} {/*renderizar o texto presente na aba 'temp.json' no post/card*/} 
              </Text>
            </View>
            <View style={styles.actionContainer}> {/*renderizar o style 'actionContainer' no post/card*/}
              <View style={styles.likeButton}> {/*renderizar o style 'likeButton' no post/card*/}
                <Ionicons name={"heart"} size={RFValue(30)} color={"white"} /> {/*rendenrizar o icone do coracao no botao de like*/}
                <Text style={styles.likeText}>12k</Text> {/*renderizar o style 'likeText' no post/card || editar o numero de likes*/}
              </View>
            </View>
          </View>
        </TouchableOpacity>
      );
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  //estilo do card/post da historia
  cardContainer: {
    margin: RFValue(13),
    backgroundColor: "#2f345d",
    borderRadius: RFValue(20) // tamanho da curvatura do card
  },
  //estilo da imagem do post da historia
  storyImage: {
    resizeMode: "contain",
    width: "95%",
    alignSelf: "center",
    height: RFValue(250)
  },
  //deixar o texto inteiro no canto esquerdo do post (texte e depois entendera)
  titleContainer: {
    paddingLeft: RFValue(20),
    justifyContent: "center"
  },
  //estilo do texto do titulo da história
  storyTitleText: {
    fontSize: RFValue(25),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  // estilo do texto do author da história
  storyAuthorText: {
    fontSize: RFValue(18),
    fontFamily: "Bubblegum-Sans",
    color: "white"
  },
  // estilo do texto da descricao da historia
  descriptionText: {
    fontFamily: "Bubblegum-Sans",
    fontSize: 13,
    color: "white",
    paddingTop: RFValue(10)
  },
  // distancia entre o botao de like e a descricao da historia
  actionContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: RFValue(10)
  },
  // estilo do botao de like
  likeButton: {
    width: RFValue(160),
    height: RFValue(40),
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "#eb3948",
    borderRadius: RFValue(30)
  },
  // estilo do texto do botao de like
  likeText: {
    color: "white",
    fontFamily: "Bubblegum-Sans",
    fontSize: RFValue(25),
    marginLeft: RFValue(5)
  }
});