import React, { Component, } from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'
import demoData from '../data/demoData'
import meetupData from '../data/meetupData'
import Row from './Row'
import EventRow from './EventRow'
import Header from './Header'
import Footer from './Footer'
import dataformatter from '../data/dataformatter'
import SectionHeader from './SectionHeader';

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    width: 300
  },
  subcontainer: {
    flex: 1,
    
  },
  separator: {
    flex: 2,
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#8E8E8E',
  },
});


class EventList extends Component {

  
  static propTypes = {}

  static defaultProps = {}

  constructor(props) {
    super(props);
    
    const getSectionData = (dataBlob, sectionId) => dataBlob[sectionId];
    const getRowData = (dataBlob, sectionId, rowId) => dataBlob[`${rowId}`]
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
    });
    
    this.state = {
      dataSource: ds.cloneWithRows(meetupData)
    };
    
  }

  render() {
      return (
        <View style={styles.container}>
            <ListView
              style={styles.subcontainer}
              dataSource={this.state.dataSource}
              renderRow={(data) => <EventRow {...data} />}
              renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
              renderHeader={() => <Header/>}
              renderFooter={() => <Footer/>}/>
          </View>
    );
  }
}

export default EventList