import React, { Component, } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 5,
    alignItems: 'stretch',
  },
  text: {
    marginLeft: 10,
    fontSize: 16,
    marginRight: 10,
  },
});

class EventRow extends Component {

  static propTypes = {
    
  }

  static defaultProps = {}

  constructor(props) {
    super(props)
    this.state = {}
  }
  
  goToEvent = () => {
    Linking.canOpenURL(this.props.link).then(supported => {
      if (supported) {
        Linking.openURL(this.props.link);
      } else {
        console.log('Don\'t know how to open URI: ' + this.props.link);
      }
    });
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.goToEvent}>
          <View>
          <Text style={styles.text}>
            {`${this.props.name}`}
          </Text>
          
        </View>
        </TouchableOpacity>
        
      </View>
    )
  }
}

export default EventRow