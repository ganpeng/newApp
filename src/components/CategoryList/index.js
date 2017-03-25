import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { List, ListItem } from 'react-native-elements';


import styleUtil from '../../utils/styleUtil';

const { dw, mainColor } = styleUtil;

const listWidth = (dw - 20 * 2 - 10) / 2 ;

const list = [{title:"经典"},{title:"冷门佳片"},{title:"豆瓣高分"},{title:"动作"},{title:"喜剧"},{title:"爱情"},{title:"悬疑"},{title:"恐怖"},{title:"科幻"},{title:"治愈"},{title:"文艺"},{title:"成长"},{title:"动画"},{title:"华语"},{title:"欧美"},{title:"韩国"},{title:"日本"}];


class CategoryList extends Component {
  static propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.titleText}>分类浏览</Text>
          <List
            containerStyle={{flexDirection:"row", flexWrap: "wrap", justifyContent: "space-between", borderTopWidth:0, borderBottomWidth: 0}}
          >
            {
              list.map((item, i) => (
                <View
                  key={i}
                  style={styles.listItemWrapper}>
                  <ListItem
                    title={item.title}
                    titleStyle={{color: mainColor}}
                  />
                </View>
              ))
            }
          </List>
        </View>
      </View>
    );
  }
}

export default CategoryList;



const styles = StyleSheet.create({
  container: {},
  title: {
    paddingVertical: 10,
  },
  titleText: {
    fontSize: 16,
    color: "#111"
  },
  listItemWrapper: {
    width: listWidth,
    height: 40
  }
})
