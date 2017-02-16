import React, { Component, } from 'react'
import { View, ListView, StyleSheet, Text } from 'react-native'
import demoData from '../data/demoData'
import Row from './Row'
import Header from './Header'
import Footer from './Footer'
import dataformatter from '../data/dataformatter'
import SectionHeader from './SectionHeader';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  separator: {
    flex: 1,
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
      sectionHeaderHasChanged : (s1,s2) => s1 != s2,
      getSectionData,
      getRowData
    });
    
    const {dataBlob, sectionIds, rowIds } = dataformatter(demoData);
    
    this.state = {
      dataSource: ds.cloneWithRowsAndSections( dataBlob, sectionIds, rowIds)
    };
    
  }

  render() {
      return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={(data) => <Row {...data} />}
        renderSeparator={(sectionId, rowId) => <View key={rowId} style={styles.separator} />}
        renderHeader={() => <Header/>}
        renderFooter={() => <Footer/>}
        renderSectionHeader={(sectionData) => <SectionHeader {...sectionData} />}
      />
    );
  }
}

export default EventList