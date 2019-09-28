import React from 'react';
import { Text, View, Image, WebView, ImageBackground } from 'react-native';
import axios from 'axios'

export default class App extends React.Component {

  state = {
    text: 'Umbrellas for U , 7T for Us',
    imgUri:
      'https://shop.classicteamlotus.co.uk/ekmps/shops/classiclotus/images/classic-team-lotus-umbrella-231-p.jpg',
    videoUri: 'http://www.youtube.com/watch?v=c0tZkB7NupA',
    thumbnail: 'https://www.elegantthemes.com/blog/wp-content/uploads/2019/04/change-wordpress-thumbnail-size-featured-image.jpg',
  };

  changeState = () => {
    axios.get('http://192.168.43.211:5000/api/stream?zipcode=110006')
      .then(response => {
        console.log(response.data.img_url)
        this.setState({
          text: response.data.text_content,
          videoUri: response.data.video.video_url,
          imgUri: 'http://192.168.43.211:8000/' + response.data.img_url
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  modifyUrl = (url) => {
    const SplitedVideo = url.split("watch?v=")
    const Embed = SplitedVideo.join("embed/")
    return Embed.concat('?autoplay=1')
  }

  componentDidMount() {
    this.timer = setInterval(() => {
      this.changeState()
    }, 30000);
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={[{ flex: 1 }, styles.elementsContainer]}>
          <View
            style={{
              flex: 0.5
            }}>
            <WebView
              style={{ flex: 1, width: undefined, height: undefined }}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              mediaPlaybackRequiresUserAction={false}
              source={{ uri: this.modifyUrl(this.state.videoUri) }}
            />
          </View>
          <View style={{ flex: 0.5, flexDirection: 'row' }}>
            <View style={{ flex: 1 }}>
              <ImageBackground source={{ uri: this.state.imgUri }} style={{
                resizeMode: 'stretch',
                height: '100%',
                width: '100%'
              }}>
                <Text style={styles.headerStyle}>{this.state.text}</Text>
              </ImageBackground>
            </View>
          </View>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  },
  headerStyle: {
    flex: 1,
    fontSize: 30,
    fontWeight: '100',
    flexWrap: 'wrap',
    margin: '3%',
    color: '#D6800C'
  },
  elementsContainer: {
    backgroundColor: '#ecf5fd',
  },
}
